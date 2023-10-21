import type { LoginUserData, RegistrationUserData } from '@/api/requests/types'
import type { Ref } from 'vue'

export type User = {
  id: null
  firstName: string
  lastName: string
  email: string
  photo: null
  birthday: string | null
  cash: string
  creditCard: CreditCard[]
  isEmailConfirmed: boolean
}

type CreditCard = {
  id: number
  bankName: string
  balance: number
}

export type InitialValuesUserStore = {
  user: User | null
}

export type AuthResponse = {
  data: {
    user: User
    accessToken: string
    refreshToken: string
  }
}

export type GoogleParseData = {
  user: User
  accessToken: string
  refreshToken: string
}

export type RefreshTokensLoginResponse = {
  data: {
    user: User
    tokens: {
      refreshToken: string
      accessToken: string
    }
  }
}

export type RegistrationUserActionProps = {
  data: RegistrationUserData
  currentStepIdx: Ref<number>
  uploadedAvatar: Ref<{
    photo: File | null
  }>
  isShowEmailConfirmMessage: Ref<boolean>
  resetForm: any
}

export type LoginUserActionProps = {
  data: LoginUserData
  resetForm: any
  isShowEmailConfirmMessage: Ref<boolean>
}
