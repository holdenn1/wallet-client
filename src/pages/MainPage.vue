<template>
  <div class="main-page-wrapper">
    <MainPageGreeting />
  </div>
</template>

<script setup lang="ts">
import MainPageGreeting from 'components/notifications/MainPageGreeting.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.main-page-wrapper {
  width: 100%;
  height: 100%;
  @include flexCenter;
}
</style>
