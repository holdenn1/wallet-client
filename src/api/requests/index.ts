import instance from '@/api'
import type { AxiosRequestConfig } from 'axios'
import type { LoginUserData, RegistrationUserData } from './types'

/* user's requests */

export const googleAuth = () => instance.get('auth/google')

export const registrationUserRequest = (data: RegistrationUserData) => {
  console.log(data)

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
  instance.get('auth/refresh', {
    headers: { authorization: `Bearer ${refreshToken}` }
  } as AxiosRequestConfig)

export const refreshTokensLogin = (refreshToken: string) =>
  instance.get('auth/refresh-login', {
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

export const getUserDataWithGoogleAuth = () => instance.get('auth/google/redirect')