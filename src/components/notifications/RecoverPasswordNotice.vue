<template>
  <div class="recover-password-notice">
    <p class="recover-password-notice__text">
      We have sent a recovery email link to
      <a href="https://mail.google.com/">{{ email }}</a>
    </p>
    <CustomMainButton type="button" :handle-click="closeRecoverPasswordNotice">Close</CustomMainButton>
  </div>
</template>

<script setup lang="ts">

import { useMainStore } from '@/store/mainStore'

defineProps<{ email: string }>()

const emit = defineEmits<{ (e: 'closeModal'): void }>()

const mainStore = useMainStore()

const closeRecoverPasswordNotice = () => {
  mainStore.setModalVisible(false)
  emit('closeModal')
}
</script>

<style lang="scss" scoped>
.recover-password-notice {
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgb(241, 235, 235);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  &__text {
    font-size: 20px;
    font-weight: 600;
    a {
      color: hsl(242, 61%, 48%);
    }
  }
}
</style>
