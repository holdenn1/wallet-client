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
}

export type GetTransactionsResponse = {
  data: Transaction[]
}

export type CreateTransactionResponse = {
  data: Transaction
}
