import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  loginUserRequest,
  logoutUserRequest,
  refreshTokensLogin,
  registrationUserRequest
} from '@/api/requests'

import type {
  AuthResponse,
  InitialValuesUserStore,
  RefreshTokensLoginResponse
} from './types/userStoreTypes'
import type { RegistrationUserData, LoginUserData } from '@/api/requests/types'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const userState = ref<InitialValuesUserStore>({
    user: null,
    isContinueAuth: false
  })

  async function registrationUser(data: RegistrationUserData) {
    try {
      const {
        data: { user, accessToken, refreshToken }
      }: AuthResponse = await registrationUserRequest(data)

      if (user) {
        userState.value.user = user
        userState.value.isContinueAuth = false
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
      }
    } catch (e) {
      console.error(e)
    }
  }

  async function loginUser(data: LoginUserData) {
    try {
      const {
        data: { user, accessToken, refreshToken }
      }: AuthResponse = await loginUserRequest(data)

      if (user) {
        userState.value.user = user
        userState.value.isContinueAuth = false
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
      }
    } catch (e) {
      console.error(e)
    }
  }

  async function logoutUser() {
    try {
      const accessToken = localStorage.getItem('accessToken')
      if (accessToken) {
        await logoutUserRequest(accessToken)
        localStorage.clear()
        userState.value.user = null
        router.push('/')
      }
    } catch (e) {
      console.error(e)
    }
  }

  async function checkAuth() {
    try {
      const refreshToken = localStorage.getItem('refreshToken')
      if (!refreshToken) {
        throw new Error()
      }
      const {
        data: { user, tokens }
      }: RefreshTokensLoginResponse = await refreshTokensLogin(refreshToken)

      localStorage.setItem('accessToken', tokens.accessToken)
      localStorage.setItem('refreshToken', tokens.refreshToken)
      userState.value.user = user
      router.push('/wallet')
    } catch (e) {
      router.push('/')
      console.error(e)
    }
  }

  function setContinueAuth(isContinue: boolean) {
    userState.value.isContinueAuth = isContinue
  }

  return {
    userState,
    registrationUser,
    loginUser,
    logoutUser,
    setContinueAuth,
    checkAuth
  }
})
