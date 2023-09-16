<template>
  <Header />
  <div class="main-wrapper">
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import Header from 'components/Header/Header.vue'

</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>