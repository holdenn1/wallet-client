<template>
  <div class="main-page-wrapper">
    <button type="button" @click="handleLogoutUser">logout</button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore'

import { useRouter } from 'vue-router'

const userStore = useUserStore()

const router = useRouter()

const handleLogoutUser = async () => {
  await userStore.logoutUser()
  if (!userStore.userState.user) {
    router.push('/')
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';

.main-page-wrapper {
  width: 100%;
  height: 100%;
  @include flexCenter;
}
</style>
