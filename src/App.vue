<template>
  <Header />
  <div class="main-wrapper">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Header from 'components/Header/Header.vue'
import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
