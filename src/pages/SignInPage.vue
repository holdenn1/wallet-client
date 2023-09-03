<template>
  <ModalWindow
    ><AuthGreeting google-btn-text="Sign in with Google" email-btn-text="Sign in with Email"
  /></ModalWindow>
  <AuthWrapper>
    <SignIn />
  </AuthWrapper>
</template>

<script setup lang="ts">
import SignIn from 'forms/mainForms/SignIn.vue'
import AuthWrapper from 'ui/wrappers/AuthWrapper.vue'
import ModalWindow from 'ui/ModalWindow/ModalWindow.vue'
import AuthGreeting from 'components/greetings/AuthGreeting.vue'

import { onMounted } from 'vue'
import { useMainStore } from '@/store/mainStore'

const mainStore = useMainStore()

onMounted(() => {
  mainStore.setModalVisible(true)
  mainStore.setContinueAuth(false)
})
</script>

<style lang="scss" scoped></style>
