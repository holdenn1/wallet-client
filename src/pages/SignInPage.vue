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

import { storeToRefs } from 'pinia'
import { onMounted, watch } from 'vue'
import { useLink, RouterLink } from 'vue-router'

const userStore = useUserStore()

const { userState } = storeToRefs(userStore)

//@ts-ignore
const { route } = useLink({ ...RouterLink.props })

watch(route, () => {
  if (userState.value.user) {
    userStore.aboutAuth()
  }
})

onMounted(() => {
  userStore.setContinueAuth(true)
})
</script>

<style lang="scss" scoped></style>
