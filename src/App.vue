<template>
  <Header />
  <div class="main-wrapper">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Header from 'components/Header/Header.vue'
import { RouterView, useRouter } from 'vue-router'
import globalRouter from '@/router/globalRouter'

const router = useRouter()
globalRouter.router = router
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
