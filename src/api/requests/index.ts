import instance from '@/api'
import type { AxiosRequestConfig } from 'axios'
import type {
  AddCreditCardData,
  CorrectBalanceData,
  CreateTransactionData,
  LoginUserData,
  RegistrationUserData
} from './types'

/* user's requests */

export const registrationUserRequest = (data: RegistrationUserData) => {
  const registrationData = new FormData()
  registrationData.append('firstName', data.firstName)
  registrationData.append('lastName', data.lastName)
  registrationData.append('email', data.email)
  registrationData.append('birthday', data.birthday)
  registrationData.append('password', data.password)
  registrationData.append('photo', data.photo)

  return instance.post('auth/registration', registrationData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const loginUserRequest = (data: LoginUserData) => instance.post('auth/login', data)

export const logoutUserRequest = (accessToken: string) =>
  instance.get('auth/logout', {
    headers: { authorization: `Bearer ${accessToken}` }
  })

export const refreshRequest = (refreshToken: string) =>
  instance.get('auth/token/refresh', {
    headers: { authorization: `Bearer ${refreshToken}` }
  } as AxiosRequestConfig)

export const refreshTokensLogin = (refreshToken: string) =>
  instance.get('auth/token/refresh/refresh-login', {
    headers: { authorization: `Bearer ${refreshToken}` }
  } as AxiosRequestConfig)

export const uploadAvatar = (cover: File) => {
  const formData = new FormData()
  formData.append('cover', cover)

  return instance.post('user/upload-cover', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const sendMessageForRecoverPassword = (userEmail: { email: string }) =>
  instance.post('auth/send/message/recover-password', userEmail)

export const recoverUserPassword = (userData: { token: string; password: string }) =>
  instance.post('auth/recover/user-password', userData)

/*Category requests*/

export const getCategories = () => instance.get('categories/get-categories')

// transactions requests

export const createTransactionRequest = (data: CreateTransactionData) =>
  instance.post('transactions/create', data)

export const getTransactionsRequest = (userId: number) =>
  instance.get(`transactions/get-transactions/${userId}`)

export const correctBalanceRequest = (data: CorrectBalanceData) =>
  instance.patch('transactions/correct/balance', data)

// credit cards

export const AddCreditCardRequest = (data: AddCreditCardData) =>
  instance.post('user/add/credit-card', data)
