import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getTransactionsRequest } from '@/api/requests'
import { AxiosError } from 'axios'
import { useToastify } from 'vue-toastify-3'

import type {
  GetTransactionsResponse,
  InitialValuesTransactionStore,
  Transaction,
  UpdateTransactionData
} from './types/transactionStoreTypes'

export const useTransactionStore = defineStore('transaction', () => {
  const transactionState = ref<InitialValuesTransactionStore>({
    transactionHistoryList: []
  })

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

  function updateTransaction(data: UpdateTransactionData) {
    const { amount, createAt, description, recipient } = data
    transactionState.value.transactionHistoryList.forEach((transaction) => {
      if (transaction.id === data.id) {
        transaction.amount = amount
        transaction.createAt = createAt
        transaction.description = description
        transaction.recipient = recipient
      }
    })
  }

  function deleteTransaction(transactionId: number) {
    transactionState.value.transactionHistoryList =
      transactionState.value.transactionHistoryList.filter(
        (transaction) => transaction.id !== transactionId
      )
  }

  function setTransactions(transactions: Transaction[]) {
    transactionState.value.transactionHistoryList = transactions
  }

  return {
    transactionState,
    deleteTransaction,
    getTransactionsHistory,
    addTransactionToList,
    updateTransaction,
    setTransactions
  }
})
