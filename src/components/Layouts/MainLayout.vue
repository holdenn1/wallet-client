<template>
  <Toastify />
  <HostingWarning v-if="isShowWarning" @close-warning="() => isShowWarning = false"/>
  <MainHeader />
  <div class="main-wrapper">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import MainHeader from 'components/headers/MainHeader.vue'
import HostingWarning from '../errors/HostingWarning.vue';
import { ref } from 'vue';

const isShowWarning = ref<boolean>(true)
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100vw;
  height: calc(100vh - 60px);
  @media screen and (max-width: 760px) {
    height: 100vh;
  }
}
</style>
