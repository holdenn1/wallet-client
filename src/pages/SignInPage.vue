<template>
  <AuthWrapper>
    <SignIn v-slot="{ isShowEmailConfirmMessage }">
      <ConfirmEmailAddress
        v-if="isShowEmailConfirmMessage"
        :email="userStore.userState.user?.email"
      />
    </SignIn>
  </AuthWrapper>
</template>

<script setup lang="ts">
import SignIn from 'forms/mainForms/SignIn.vue'
import AuthWrapper from 'ui/wrappers/AuthWrapper.vue'
import ConfirmEmailAddress from 'components/notifications/ConfirmEmailAddress.vue'

import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()
</script>

<style lang="scss" scoped></style>
