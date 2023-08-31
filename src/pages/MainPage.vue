<template>
  <div class="main-page-wrapper">
    <div class="greeting">
      <h3 class="greeting__text">Welcome to the wallet</h3>
      <MainPageNavigation />
    </div>
  </div>
</template>

<script setup lang="ts">
import MainPageNavigation from '@/components/navigation/MainPageNavigation.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.main-page-wrapper {
  width: 100%;
  height: 100%;
  @include flexCenter;
  .greeting {
    padding: 20px;
    box-sizing: border-box;
    &__text {
      font-size: 38px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
</style>
