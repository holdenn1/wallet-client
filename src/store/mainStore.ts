import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const mainState = ref<{
    isModalVisible: boolean
    isMenuVisible: boolean
    isSettingOperation: boolean
  }>({ isModalVisible: false, isMenuVisible: false, isSettingOperation: false })

  function setModalVisible(visible: boolean) {
    mainState.value.isModalVisible = visible
  }

  function setMenuVisible(visible: boolean) {
    mainState.value.isMenuVisible = visible
  }

  function setSettingOperationMenu(visible: boolean) {
    mainState.value.isSettingOperation = visible
  }

  return { mainState, setModalVisible, setMenuVisible, setSettingOperationMenu }
})
