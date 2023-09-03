<template>
  <div class="main-page-greeting">
    <h3 class="main-page-greeting__text">Welcome to the wallet</h3>
    <MainPageNavigation />
  </div>
</template>

<script setup lang="ts">
import MainPageNavigation from 'navigation/MainPageNavigation.vue'
</script>

<style lang="scss" scoped>
.main-page-greeting {
  padding: 20px;
  box-sizing: border-box;
  &__text {
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
