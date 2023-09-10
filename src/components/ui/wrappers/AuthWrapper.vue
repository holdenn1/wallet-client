<template>
  <div class="sign-up-page-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.sign-up-page-wrapper {
  width: 100vw;
  height: 100vh;
  @include flexCenter;
}
</style>
