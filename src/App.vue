<template>
  <router-view />
</template>

<script setup lang="ts">
import globalRouter from '@/router/globalRouter'
import { useUserStore } from '@/store/userStore'

import { useRoute, useRouter } from 'vue-router'
import { onMounted, toRefs, watch } from 'vue'

import { useMainStore } from './store/mainStore'

const userStore = useUserStore()
const mainStore = useMainStore()

const route = useRoute()
const router = useRouter()

const { name } = toRefs(route)
globalRouter.router = router

onMounted(() => {
  const currentURL = window.location.href

  const tokenRegex = /token=([^&]*)/

  const tokenMatch = currentURL.match(tokenRegex)!

  const tokenValue = tokenMatch[1]

  if (tokenValue.length) {
    localStorage.setItem('refreshToken', tokenValue)
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
