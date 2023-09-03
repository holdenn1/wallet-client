<template>
  <ModalWindow
    ><AuthGreeting google-btn-text="Sign up with Google" email-btn-text="Sign up with Email"
  /></ModalWindow>
  <AuthWrapper>
    <SignUp />
  </AuthWrapper>
</template>

<script setup lang="ts">
import SignUp from 'forms/mainForms/SignUp.vue'
import ModalWindow from 'ui/ModalWindow/ModalWindow.vue'
import AuthWrapper from 'ui/wrappers/AuthWrapper.vue'
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
