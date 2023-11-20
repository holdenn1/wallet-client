import instance from '@/api'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

import type {
  AddCreditCardData,
  CorrectBalanceData,
  CreateTransactionData,
  LoginUserData,
  Period,
  RegistrationUserData,
  UpdateUserData,
  updateTransactionData
} from './types'

export const BASE_URL = 'http://localhost:8000/'

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
  axios.create({ baseURL: BASE_URL }).get('auth/token/refresh', {
    headers: { authorization: `Bearer ${refreshToken}` }
  } as AxiosRequestConfig)

export const refreshTokensLogin = (refreshToken: string) =>
  instance.get('auth/token/refresh/refresh-login', {
    headers: { authorization: `Bearer ${refreshToken}` }
  } as AxiosRequestConfig)

export const updateUserAvatar = (cover: File) => {
  const formData = new FormData()

  formData.append('cover', cover)

  return instance.post('user/update-user-avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const updateUserDateRequest = (data: UpdateUserData) =>
  instance.put('user/update-user', data)

export const sendMessageForRecoverPassword = (userEmail: { email: string }) =>
  instance.post('auth/send/message/recover-password', userEmail)

export const recoverUserPassword = (userData: { token: string; password: string }) =>
  instance.post('auth/recover/user-password', userData)

export const getUserRequest = () => instance.get('user/get-user')

/*Category requests*/

export const getCategories = () => instance.get('categories/get-categories')

// transactions requests

export const createTransactionRequest = (data: CreateTransactionData) =>
  instance.post('transactions/create', data)

export const correctBalanceRequest = (data: CorrectBalanceData) =>
  instance.put('transactions/correct/balance', data)

export const updateTransactionRequest = (transactionId: string, data: updateTransactionData) =>
  instance.put(`transactions/update/transaction/${transactionId}`, data)

export const deleteTransactionRequest = (transactionId: string) =>
  instance.delete(`transactions/delete-transaction/${transactionId}`)

export const getTransactionsByPeriod = (period: Period, currentPage: string) =>
  instance.get(
    `transactions/get-transaction/by-period?period=${period}&page=${currentPage}&pageSize=10`
  )

export const getMonthlySummary = () => instance.get('transactions/monthly-summary')

export const getMonthlyCostsRequest = () => instance.get('transactions/monthly/costs')
// credit cards

export const AddCreditCardRequest = (data: AddCreditCardData) =>
  instance.post('user/add/credit-card', data)
