<template>
  <div class="main-page-wrapper">
    <button type="button" @click="handleLogoutUser">logout</button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()

const handleLogoutUser = async () => {
  await userStore.logoutUser()
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
