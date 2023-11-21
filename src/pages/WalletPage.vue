<template>
  <div class="activate-account-notice" v-if="!userStore.userState.user?.isEmailConfirmed">
    <p>Please confirm your account - <a href="https://mail.google.com/">Click me</a></p>
  </div>
  <div @click="() => mainStore.setMenuVisible(false)" class="wallet-page-wrapper">
    <UserSidebar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import UserSidebar from 'components/sidebars/user-sidebar/UserSidebar.vue'
import { useMainStore } from '@/store/mainStore'
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.wallet-page-wrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'wallet-content user-sidebar'
    'wallet-content user-sidebar';
  position: relative;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'wallet-content'
      'wallet-content';
  }

  @media screen and (max-width: 760px) {
    margin: 0;
    height: 100%;
  }
}

.activate-account-notice {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(235, 175, 12, 0.95);
  z-index: 10000;
  @include flexCenter;
  p {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    a {
      font-size: 22px;
      font-weight: 600;
    }
  }
}
</style>
