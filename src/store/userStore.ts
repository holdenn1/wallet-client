import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useToastify } from 'vue-toastify-3'

import {
  loginUserRequest,
  logoutUserRequest,
  refreshTokensLogin,
  registrationUserRequest
} from '@/api/requests'

import { useRoute, useRouter } from 'vue-router'
import { AxiosError } from 'axios'

import type {
  AuthResponse,
  CorrectUserBalanceData,
  CreditCard,
  InitialValuesUserStore,
  LoginUserActionProps,
  RefreshTokensLoginResponse,
  RegistrationUserActionProps,
  User
} from './types/userStoreTypes'

import { PaymentMethodType } from '@/components/forms/widgetForms/types'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()

  const route = useRoute()
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
          router.push({ name: 'default-widgets' })
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
      if(!location.href.includes('recover-password') ){

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
        router.push({ name: 'default-widgets' })
      }
    } catch (e) {
      router.push({ path: '/' })
      console.error(e)
    }
  }

  function correctUserBalance({ amount, paymentMethod, type, creditCard }: CorrectUserBalanceData) {

    console.log(amount, paymentMethod, type, creditCard );
    
    if (userState.value.user) {
      switch (type) {
        case 'cost': {
          if (paymentMethod === PaymentMethodType.CASH) {
            userState.value.user.cash = amount
            return
          }
          userState.value.user.creditCard.forEach((card) => {
            if (card.id === creditCard?.id) {
              card.balance = creditCard.balance
            }
          })

          break
        }
        case 'income': {
          if (paymentMethod === PaymentMethodType.CASH) {
            userState.value.user.cash = amount
            return
          }
          userState.value.user.creditCard.forEach((card) => {
            if (card.id === creditCard?.id) {
              card.balance = creditCard.balance
            }
          })

          break
        }
        case 'transfer': {
          if (paymentMethod === PaymentMethodType.CASH) {
            userState.value.user.cash = amount
            return
          }
          userState.value.user.creditCard.forEach((card) => {
            if (card.id === creditCard?.id) {
              card.balance = creditCard.balance
            }
          })
          break
        }
      }
    }
  }

  function addUserCreditCard(creditCard: CreditCard) {
    if (userState.value.user?.creditCard) {
      userState.value.user?.creditCard.push(creditCard)
    }
  }

  function changeBalance(data: User | CreditCard) {
    if (userState.value.user) {
      if ((data as CreditCard).balance) {
        const { id, balance } = data as CreditCard
        userState.value.user?.creditCard.forEach((card) => {
          if (card.id === id) {
            card.balance = balance
          }
        })
        return
      }
      userState.value.user.cash = (data as User).cash
    }
  }

  function setUser(data: User) {
    if (userState.value.user) {
      userState.value.user = data
    }
  }

  return {
    userState,
    setUser,
    registrationUser,
    loginUser,
    logoutUser,
    checkAuth,
    addUserCreditCard,
    correctUserBalance,
    changeBalance,
  }
})
