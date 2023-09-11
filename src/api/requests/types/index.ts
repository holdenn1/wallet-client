import type { InitialValuesSignUpForm } from '@/components/forms/mainForms/types'

export type RegistrationUserData = Omit<InitialValuesSignUpForm, 'confirmPassword'> & {
  photo: File
}
export type LoginUserData = {
  email: string
  password: string
}
