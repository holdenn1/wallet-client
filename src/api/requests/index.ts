import instance from '@/api'
import type { AxiosRequestConfig } from 'axios'
import type { LoginUserData, RegistrationUserData } from './types'

/* user's requests */

export const googleAuth = () => instance.get('auth/google')

export const registrationUserRequest = (data: RegistrationUserData) =>
  instance.post('auth/registration', data)

export const loginUserRequest = (data: LoginUserData) => instance.post('auth/login', data)

export const logoutUserRequest = (accessToken: string) =>
  instance.get('auth/logout', {
    headers: { authorization: `Bearer ${accessToken}` }
  })

export const refreshRequest = (refreshToken: string) =>
  instance.get('auth/refresh', {
    headers: { authorization: `Bearer ${refreshToken}` }
  } as AxiosRequestConfig)

export const refreshTokensLogin = (refreshToken: string) =>
  instance.get('auth/refresh-login', {
    headers: { authorization: `Bearer ${refreshToken}` }
  } as AxiosRequestConfig)

export const verifyUser = (userId: string, token: string) =>
  instance.get(`auth/verify/${userId}/${token}`)
