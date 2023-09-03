<template>
  <div class="sign-up-page-wrapper">
    <button type="button" @click="setModalVisible(!main.isModalVisible)">click</button>
  </div>
  <ModalWindow>sdsaadsd</ModalWindow>
  <div v-if="false" class="sign-up-page-wrapper"><SignUp /></div>
</template>

<script setup lang="ts">
import ModalWindow from 'ui/ModalWindow/ModalWindow.vue'
import SignUp from 'forms/mainForms/SignUp.vue'
import { useMainStore } from '@/store/mainStore'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()

const { main } = storeToRefs(mainStore)
const { setModalVisible } = mainStore
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.sign-up-page-wrapper {
  width: 100vw;
  height: 100vh;
  @include flexCenter;
}
</style>
