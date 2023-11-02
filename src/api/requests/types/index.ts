import {
  PaymentMethodType,
  type Banks,
  type OperationTypes
} from '@/components/forms/widgetForms/types'
import type { InitialValuesSignUpForm } from '@/components/forms/mainForms/types'

export type RegistrationUserData = Omit<InitialValuesSignUpForm, 'confirmPassword'> & {
  photo: File
}

export enum CorrectBallanceMethod {
  CORRECT = 'correct',
  CHANGE = 'change'
}

export type LoginUserData = {
  email: string
  password: string
}

export type CreateTransactionData = {
  typeOperation: OperationTypes
  amount: string
  paymentMethod: PaymentMethodType
  category: string
  description?: string
  recipient?: string
  cardId?: number
  subcategory?: string
}

export type updateTransactionData = Partial<CreateTransactionData> | {
  createAt: string
}

export type AddCreditCardData = {
  bankName: Banks
  balance: string
}

export type CorrectBalanceData = {
  method: string
  balanceType: string
  cardId: number | undefined
  correctBalance: string
}

export type UpdateUserData = Omit<RegistrationUserData, 'photo'> | Partial<RegistrationUserData> | {
  photo: string
}