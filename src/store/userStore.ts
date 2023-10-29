import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useToastify } from 'vue-toastify-3'

import {
  loginUserRequest,
  logoutUserRequest,
  refreshTokensLogin,
  registrationUserRequest
} from '@/api/requests'

import { useRouter } from 'vue-router'
import { AxiosError } from 'axios'

import type {
  AuthResponse,
  InitialValuesUserStore,
  LoginUserActionProps,
  RefreshTokensLoginResponse,
  RegistrationUserActionProps
} from './types/userStoreTypes'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const { toastify } = useToastify()
  const userState = ref<InitialValuesUserStore>({
    user: null
  })

  async function registrationUser({
    data,
    currentStepIdx,
    isShowEmailConfirmMessage,
    uploadedAvatar,
    resetForm
  }: RegistrationUserActionProps) {
    try {
      const {
        data: { user, accessToken, refreshToken }
      }: AuthResponse = await registrationUserRequest(data)

      if (user) {
        userState.value.user = user
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        currentStepIdx.value = 0
        uploadedAvatar.value.photo = null
        resetForm()
        isShowEmailConfirmMessage.value = true
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        toastify('error', e.response?.data?.message || 'An error occurred')
        console.error(e)
      } else {
        console.error(e)
      }
    }
  }

  async function loginUser({ data, isShowEmailConfirmMessage, resetForm }: LoginUserActionProps) {
    try {
      const {
        data: { user, accessToken, refreshToken }
      }: AuthResponse = await loginUserRequest(data)

      if (user) {
        userState.value.user = user
        resetForm()
        if (user.isEmailConfirmed) {
          localStorage.setItem('accessToken', accessToken)
          localStorage.setItem('refreshToken', refreshToken)
          router.push({ name: 'wallet' })
        } else {
          isShowEmailConfirmMessage.value = true
        }
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        toastify('error', e.response?.data?.message || 'An error occurred')
        console.error(e)
      } else {
        console.error(e)
      }
    }
  }

  async function logoutUser() {
    try {
      const accessToken = localStorage.getItem('accessToken')
      if (accessToken) {
        await logoutUserRequest(accessToken)
        localStorage.clear()
        userState.value.user = null
        router.push({ path: '/' })
      }
    } catch (e) {
      toastify('error', 'An error occurred')
      router.push({ path: '/' })
      
      console.error(e)
    }
  }

  async function checkAuth() {
    try {
      const refreshToken = localStorage.getItem('refreshToken')
      if (!refreshToken) {
        throw new Error()
      }
      console.log(12413112);
      
      const {
        data: { user, tokens }
      }: RefreshTokensLoginResponse = await refreshTokensLogin(refreshToken)

      localStorage.setItem('accessToken', tokens.accessToken)
      localStorage.setItem('refreshToken', tokens.refreshToken)
      userState.value.user = user
      router.push({ name: 'default-widgets' })
    } catch (e) {
      router.push({ path: '/' })
      console.error(e)
    }
  }

  return {
    userState,
    registrationUser,
    loginUser,
    logoutUser,
    checkAuth
  }
})
