import {
  PaymentMethodType,
  type Banks,
  type OperationTypes
} from '@/components/forms/widgetForms/types'
import type { InitialValuesSignUpForm } from '@/components/forms/mainForms/types'

export type RegistrationUserData = Omit<InitialValuesSignUpForm, 'confirmPassword'> & {
  photo: File
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
  bankName?: Banks
  subcategory?: string
}

export type AddCreditCardData = {
  bankName: Banks;
  balance: string;
}