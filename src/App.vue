<template>
  <Header />
  <div class="main-wrapper">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Header from 'components/Header/Header.vue'

import globalRouter from '@/router/globalRouter'

import { RouterView, useRouter } from 'vue-router'
import { onMounted } from 'vue'

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
    const parsedData = JSON.parse(cleanedData)

    console.log(parsedData)
    console.log(window.history)
  }
})
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
