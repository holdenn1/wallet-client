<template>
  <AuthWrapper>
    <SignUp v-if="!!userState.isContinueAuth" />
    <ConfirmEmailAddress
      v-if="!userState.user?.isEmailConfirmed && !userState.isContinueAuth"
      :email="userState.user?.email"
    />
  </AuthWrapper>
</template>

<script setup lang="ts">
import SignUp from 'forms/mainForms/SignUp.vue'
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
