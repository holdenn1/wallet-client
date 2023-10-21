<template>
  <router-view />
</template>

<script setup lang="ts">
import globalRouter from '@/router/globalRouter'
import { useUserStore } from '@/store/userStore'

import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

import type { GoogleParseData } from '@/store/types/userStoreTypes'

const userStore = useUserStore()

const router = useRouter()
globalRouter.router = router

onMounted(() => {
  const userData = document.cookie
    ?.split('; ')
    ?.find((row) => row.startsWith('userData='))
    ?.split('=')[1]

  if (userData) {
    const decodedData = decodeURIComponent(userData)
    const cleanedData = decodedData.replace(/^j:/, '')

    const { accessToken, refreshToken }: GoogleParseData = JSON.parse(cleanedData)

    if (accessToken && refreshToken) {
      const cookieName = 'userData'

      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      document.cookie = cookieName + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
    }
  }

  if (localStorage.getItem('refreshToken')) {
    userStore.checkAuth()
  } else {
    userStore.logoutUser()
  }
})
</script>

<style lang="scss" scoped></style>
