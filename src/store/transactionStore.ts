import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getTransactionsByPeriod } from '@/api/requests'
import { AxiosError } from 'axios'
import { useToastify } from 'vue-toastify-3'

import type {
  InitialValuesTransactionStore,
  Transaction,
  UpdateTransactionData
} from './types/transactionStoreTypes'

import type { Period } from '@/api/requests/types'

export const useTransactionStore = defineStore('transaction', () => {
  const transactionState = ref<InitialValuesTransactionStore>({
    transactionHistoryList: [],
    currentPage: 1
  })

  const { toastify } = useToastify()

  async function getTransactions(period: Period) {
    try {

      
      const { data }: { data: Transaction[] } = await getTransactionsByPeriod(
        period,
        String(transactionState.value.currentPage)
      )

      

      if (data.length) {
        const oldTransactions = transactionState.value.transactionHistoryList.map(
          (transaction) => transaction.id
        )
        const newTransactions = data.filter(
          (transaction) => !oldTransactions.includes(transaction.id)
        )
        transactionState.value.transactionHistoryList = [
          ...transactionState.value.transactionHistoryList,
          ...newTransactions
        ]
        transactionState.value.currentPage += 1
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

  function setCurrentPage(page: number) {
    transactionState.value.currentPage = page
  }

  return {
    transactionState,
    deleteTransaction,
    getTransactions,
    addTransactionToList,
    updateTransaction,
    setCurrentPage,
    setTransactions
  }
})
