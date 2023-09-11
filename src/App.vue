<template>
  <Header />
  <div class="main-wrapper">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Header from 'components/Header/Header.vue'

import globalRouter from '@/router/globalRouter'

import { onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'

import type { GoogleParseData } from './store/types/userStoreTypes'
import { useUserStore } from './store/userStore'

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

    const { user, accessToken, refreshToken }: GoogleParseData = JSON.parse(cleanedData)

    if (user) {
      userStore.setUser(user)
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
    }
  }
})
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
