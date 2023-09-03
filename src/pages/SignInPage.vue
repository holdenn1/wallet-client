<template>
  <div class="sign-in-page-wrapper"><SignIn /></div>
</template>

<script setup lang="ts">
import SignIn from 'forms/mainForms/SignIn.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.sign-in-page-wrapper {
  width: 100vw;
  height: 100vh;
  @include flexCenter;
}
</style>
