<template>
  <div class="main-page-wrapper" @click="mainStore.setModalVisible(false)">
    <ModalWindow><AuthGreeting :buttons-text="modalBtnTexts" /></ModalWindow>
    <MainPageGreeting
      @login="() => (modalType = 'login')"
      @registration="() => (modalType = 'registration')"
    />
  </div>
</template>

<script setup lang="ts">
import ModalWindow from 'ui/ModalWindow/ModalWindow.vue'
import AuthGreeting from 'components/notifications/AuthGreeting.vue'
import MainPageGreeting from 'components/notifications/MainPageGreeting.vue'

import { ref, computed } from 'vue'
import { useMainStore } from '@/store/mainStore'

const modalType = ref<'login' | 'registration' | ''>('')

const mainStore = useMainStore()

const modalBtnTexts = computed(() => {
  if (modalType.value === 'login') {
    return {
      googleBtnText: 'Sign in with Google',
      emailBtnText: 'Sign in with Email'
    }
  }
  return {
    googleBtnText: 'Sign up with Google',
    emailBtnText: 'Sign up with Email'
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.main-page-wrapper {
  width: 100%;
  height: 100%;
  @include flexCenter;
}
</style>
