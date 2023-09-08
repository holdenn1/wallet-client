import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginUserRequest, registrationUserRequest } from '@/api/requests'

import type { AuthResponse, InitialValuesUserStore } from './types/userStoreTypes'
import type { RegistrationUserData, LoginUserData } from '@/api/requests/types'

export const useUserStore = defineStore('user', () => {
  const userState = ref<InitialValuesUserStore>({
    user: null
  })

  async function registrationUser(data: RegistrationUserData) {
    try {
      const {
        data: { user, accessToken, refreshToken }
      }: AuthResponse = await registrationUserRequest(data)

      if (user) {
        userState.value.user = user
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
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
      }
    } catch (e) {
      console.error(e)
    }
  }
  return { userState, registrationUser, loginUser }
})
