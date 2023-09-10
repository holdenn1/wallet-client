<template>
  <ModalWindow v-if="!userState.user"
    ><AuthGreeting google-btn-text="Sign up with Google" email-btn-text="Sign up with Email"
  /></ModalWindow>
  <AuthWrapper>
    <SignUp v-if="userState.isContinueAuth" />
    <ConfirmEmailAddress
      v-if="!userState.user?.isEmailConfirmed && !userState.isContinueAuth"
      :email="userState.user?.email"
    />
  </AuthWrapper>
</template>

<script setup lang="ts">
import SignUp from 'forms/mainForms/SignUp.vue'
import ModalWindow from 'ui/ModalWindow/ModalWindow.vue'
import AuthWrapper from 'ui/wrappers/AuthWrapper.vue'
import AuthGreeting from 'components/notifications/AuthGreeting.vue'
import ConfirmEmailAddress from 'components/notifications/ConfirmEmailAddress.vue'

import { useMainStore } from '@/store/mainStore'
import { useUserStore } from '@/store/userStore'

import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useLink, RouterLink } from 'vue-router'

//@ts-ignore
const { route } = useLink({ ...RouterLink.props })

const mainStore = useMainStore()
const userStore = useUserStore()

const { userState } = storeToRefs(userStore)


watch(route, async () => {
  if (userState.value.user) {
    userStore.aboutAuth()
  }
})

onMounted(() => {
  mainStore.setModalVisible(true)
  userStore.setContinueAuth(false)
})
</script>

<style lang="scss" scoped></style>
