export type User = {
  id: null
  firstName: string
  lastName: string
  email: string
  photo: null
  age: string
  cash: string
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
