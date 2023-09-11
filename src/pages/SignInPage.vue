<template>
  <AuthWrapper>
    <SignIn v-if="!!userState.isContinueAuth"/>
    <ConfirmEmailAddress
      v-if="!userState.user?.isEmailConfirmed && !userState.isContinueAuth"
      :email="userState.user?.email"
    />
  </AuthWrapper>
</template>

<script setup lang="ts">
import SignIn from 'forms/mainForms/SignIn.vue'
import AuthWrapper from 'ui/wrappers/AuthWrapper.vue'
import ConfirmEmailAddress from 'components/notifications/ConfirmEmailAddress.vue'

import { useUserStore } from '@/store/userStore'

import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()

const { userState } = storeToRefs(userStore)

onMounted(() => {
  userStore.setContinueAuth(true)
})
</script>

<style lang="scss" scoped></style>
