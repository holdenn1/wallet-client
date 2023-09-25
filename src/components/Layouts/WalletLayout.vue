<template>
  <!-- <div class="activate-account-notice" v-if="!userStore.userState.user?.isEmailConfirmed">
    <p>Please confirm your account - <a  href="https://mail.google.com/">Click me</a> </p>
  </div> -->
  <div class="wallet-layout-wrapper">
    <UserSidebar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import UserSidebar from 'components/sidebars/user-sidebar/UserSidebar.vue'
// import { useUserStore } from '@/store/userStore'

// const userStore = useUserStore()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.wallet-layout-wrapper {
  margin-top: 60px;
  width: 100%;
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: minmax(310px, 1fr) minmax(310px, 1fr) minmax(260px, 320px);
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'financial-control costs user-sidebar'
    'financial-control costs user-sidebar'
    'financial-control costs user-sidebar'
    'cost-structure costs user-sidebar'
    'cost-structure cash-flow user-sidebar'
    'cost-structure cash-flow user-sidebar';
}

.activate-account-notice {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(235, 175, 12, 0.9);
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
