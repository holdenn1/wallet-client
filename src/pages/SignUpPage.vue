<template>
  <div class="sign-up-page-wrapper"><SignUp /></div>
</template>

<script setup lang="ts">
import SignUp from 'forms/mainForms/SignUp.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.sign-up-page-wrapper {
  width: 100vw;
  height: 100vh;
  @include flexCenter;
}
</style>
