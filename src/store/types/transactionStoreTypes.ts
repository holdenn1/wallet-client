import type { Banks } from '@/components/forms/widgetForms/types'
import type { Category, Subcategory } from './categoryStoreTypes'

export type InitialValuesTransactionStore = {
  transactionHistoryList: Transaction[]
}

export type Transaction = {
  id: number
  type: 'cost'
  paymentMethod: 'cash'
  amount: number
  recipient: string
  description: string
  category: Category
  subcategory: Subcategory | null
  createAt: Date
  bankName: Banks| undefined
}

export type GetTransactionsResponse = {
  data: Transaction[]
}

export type CreateTransactionResponse = {
  data: Transaction
}
