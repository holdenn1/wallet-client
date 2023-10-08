import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const mainState = ref<{
    isModalVisible: boolean
    isMenuVisible: boolean
  }>({ isModalVisible: false, isMenuVisible: false })

  function setModalVisible(visible: boolean) {
    mainState.value.isModalVisible = visible
  }

  function setMenuVisible(visible: boolean) {
    mainState.value.isMenuVisible = visible
  }

  return { mainState, setModalVisible, setMenuVisible }
})
