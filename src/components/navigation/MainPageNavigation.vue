<template>
  <div class="main-page-navigation-wrapper">
    <RouterLink :to="{ name: 'sign-in' }" class="navigate-to-login">
      Return to the account
    </RouterLink>
    <RouterLink :to="{ name: 'sign-up' }" class="navigate-to-registration">
      Create an account
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/mainLinkNavigation.scss';
@import '@/styles/mixins/d-flex-ctr.scss';
.main-page-navigation-wrapper {
  @include flexCenter;
  @media screen and (max-width: 460px) {
    flex-direction: column;
  }
  .navigate-to-login {
    @include mainLinkNavigation(#0e38a9, rgb(31, 31, 199), rgb(57, 57, 190));
  }
  .navigate-to-registration {
    @include mainLinkNavigation(hsl(243deg 67.66% 42.36%), hsl(243, 76%, 40%), hsl(243, 76%, 40%));
  }
}
</style>
