import type { Banks, PaymentMethodType } from '@/components/forms/widgetForms/types'
import type { Category, Subcategory } from './categoryStoreTypes'
import type { CreditCard } from './userStoreTypes'

export type InitialValuesTransactionStore = {
  transactionHistoryList: Transaction[]
}

export type Transaction = {
  id: number
  type: 'cost'
  paymentMethod: PaymentMethodType
  amount: number
  recipient: string
  description: string
  category: Category
  subcategory: Subcategory | null
  createAt: Date
  creditCard: CreditCard | undefined
}

export type GetTransactionsResponse = {
  data: Transaction[]
}

export type CreateTransactionResponse = {
  data: Transaction
}
