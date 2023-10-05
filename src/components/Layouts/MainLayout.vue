<template>
  <Toastify />
  <MainHeader />
  <div class="main-wrapper">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import MainHeader from 'components/headers/MainHeader.vue'
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
