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
@import '@/styles/mixins/d-flex-ctr.scss';
@import '@/styles/mixins/main-button.scss';
.main-page-navigation-wrapper {
  @include flexCenter;
  @media screen and (max-width: 460px) {
    flex-direction: column;
  }
  .navigate-to-login {
    @include flexCenter;
    @include mainButton(#0e38a9, 600, rgb(31, 31, 199));
    width: 200px;
    box-shadow: 1px 1px 6px 2px rgb(57, 57, 190);
    transition: 0.5s;

    &:hover {
      box-shadow: 2px 2px 12px 5px rgb(57, 57, 190);
    }
  }
  .navigate-to-registration {
    @include flexCenter;
    @include mainButton(hsl(243deg 67.66% 42.36%), 600, hsl(243, 76%, 40%));
    width: 200px;
    box-shadow: 1px 1px 6px 2px hsl(243, 76%, 40%);
    transition: 0.5s;

    &:hover {
      box-shadow: 2px 2px 12px 5px hsl(243, 76%, 40%);
    }
  }
}
</style>
