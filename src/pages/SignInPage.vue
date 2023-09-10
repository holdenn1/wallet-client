<template>
  <ModalWindow v-if="!userState.user"
    ><AuthGreeting google-btn-text="Sign in with Google" email-btn-text="Sign in with Email"
  /></ModalWindow>
  <AuthWrapper>
    <SignIn v-if="userState.isContinueAuth" />
    <ConfirmEmailAddress
      v-if="!userState.user?.isEmailConfirmed && !userState.isContinueAuth"
      :email="userState.user?.email"
    />
  </AuthWrapper>
</template>

<script setup lang="ts">
import SignIn from 'forms/mainForms/SignIn.vue'
import AuthWrapper from 'ui/wrappers/AuthWrapper.vue'
import ModalWindow from 'ui/ModalWindow/ModalWindow.vue'
import AuthGreeting from 'components/notifications/AuthGreeting.vue'
import ConfirmEmailAddress from 'components/notifications/ConfirmEmailAddress.vue'

import { useMainStore } from '@/store/mainStore'
import { useUserStore } from '@/store/userStore'

import { onMounted , watch} from 'vue'
import { storeToRefs } from 'pinia'
import { useLink, RouterLink } from 'vue-router'


const mainStore = useMainStore()
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
  mainStore.setModalVisible(true)
  userStore.setContinueAuth(false)
})
</script>

<style lang="scss" scoped></style>
