import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getTransactionsRequest } from '@/api/requests'
import { AxiosError } from 'axios'
import { useToastify } from 'vue-toastify-3'

import type {
  GetTransactionsResponse,
  InitialValuesTransactionStore,
  Transaction
} from './types/transactionStoreTypes'

export const useTransactionStore = defineStore('transaction', () => {
  const transactionState = ref<InitialValuesTransactionStore>({ transactionHistoryList: [] })

  const { toastify } = useToastify()

  async function getTransactionsHistory(userId: number) {
    try {
      const { data }: GetTransactionsResponse = await getTransactionsRequest(userId)

      if (data) {
        transactionState.value.transactionHistoryList = data
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        toastify('error', e.response?.data?.message || 'An error occurred')
        console.error(e)
      } else {
        console.error(e)
      }
    }
  }

  function addTransactionToList(transaction: Transaction) {
    transactionState.value.transactionHistoryList.unshift(transaction)
  }

  return { transactionState, getTransactionsHistory, addTransactionToList }
})
