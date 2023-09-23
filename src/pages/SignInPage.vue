<template>
  <AuthWrapper @click="mainStore.setModalVisible(false)">
    <SignIn />
    <ModalWindow><RecoverPasswordEmailForm /></ModalWindow>
  </AuthWrapper>
</template>

<script setup lang="ts">
import SignIn from 'forms/mainForms/SignIn.vue'
import RecoverPasswordEmailForm from 'forms/recoverPassword/RecoverPasswordEmailForm.vue'
import AuthWrapper from 'ui/wrappers/AuthWrapper.vue'
import ModalWindow from 'ui/ModalWindow/ModalWindow.vue'
import { useMainStore } from '@/store/mainStore'

const mainStore = useMainStore()
</script>

<style lang="scss" scoped></style>
