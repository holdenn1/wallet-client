import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const main = ref<{
    isModalVisible: boolean
    continueAuth: boolean
  }>({ isModalVisible: false, continueAuth: false })

  function setModalVisible(visible: boolean) {
    main.value.isModalVisible = visible
  }

  function setContinueAuth(isContinue: boolean) {
    main.value.continueAuth = isContinue
  }

  return { main, setModalVisible, setContinueAuth }
})
