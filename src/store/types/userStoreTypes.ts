export type User = {
  id: null
  firstName: string
  lastName: string
  email: string
  photo: null
  birthday: string
  cash: string
  isEmailConfirmed: boolean
}

export type InitialValuesUserStore = {
  user: User | null
  isContinueAuth: boolean
}

export type AuthResponse = {
  data: {
    user: User
    accessToken: string
    refreshToken: string
  }
}
