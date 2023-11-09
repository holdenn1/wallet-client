import type { OperationTypes, PaymentMethodType } from '@/components/forms/widgetForms/types'
import type { Category, Subcategory } from './categoryStoreTypes'
import type { CreditCard, User } from './userStoreTypes'

export type InitialValuesTransactionStore = {
  transactionHistoryList: Transaction[]
  currentPage: number
}

export type Transaction = {
  id: number
  type: OperationTypes
  paymentMethod: PaymentMethodType
  amount: number
  recipient: string
  description: string
  category: Category
  subcategory: Subcategory | null
  createAt: Date
  creditCard: CreditCard | undefined
  user: User
}

export type UpdateTransactionResponse = {
  id: number
  type: OperationTypes
  paymentMethod: PaymentMethodType
  amount: number
  recipient: string
  description: string
  createAt: Date
  updateAt: Date
  creditCard: CreditCard | null | undefined
}

export type UpdateTransactionData = {
  id: number
  amount: number
  createAt: Date
  recipient: string
  description: string
}



export type CreateTransactionResponse = {
  data: Transaction
}

export type CorrectTheBalanceResponse = {
  data: User | CorrectCreditCardBalanceResponse | Transaction
}

type CorrectCreditCardBalanceResponse =
  | CreditCard
  | {
      user: User
    }
