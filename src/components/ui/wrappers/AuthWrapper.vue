<template>
  <div :class="{ 'is-continue-auth': mainStore.main.continueAuth }" class="sign-up-page-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/mainStore'

const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.sign-up-page-wrapper {
  width: 100vw;
  height: 100vh;
  @include flexCenter;
  visibility: hidden;
  pointer-events: none;
}
.is-continue-auth {
  visibility: visible;
  pointer-events: all;
  transition-delay: 0.5s;
}
</style>
