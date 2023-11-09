<template>
  <router-view />
</template>

<script setup lang="ts">
import globalRouter from '@/router/globalRouter'
import { useUserStore } from '@/store/userStore'

import { useRoute, useRouter } from 'vue-router'
import { onMounted, toRefs, watch } from 'vue'

import type { GoogleParseData } from '@/store/types/userStoreTypes'
import { useMainStore } from './store/mainStore'

const userStore = useUserStore()
const mainStore = useMainStore()

const route = useRoute()
const router = useRouter()

const { name } = toRefs(route)
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

  userStore.checkAuth()
})

watch(name, () => {
  if (mainStore.mainState.isModalVisible) {
    mainStore.setModalVisible(false)
  }
})
</script>

<style lang="scss" scoped></style>
