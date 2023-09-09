import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const mainState = ref<{
    isModalVisible: boolean
  }>({ isModalVisible: false })

  function setModalVisible(visible: boolean) {
    mainState.value.isModalVisible = visible
  }

  return { mainState, setModalVisible }
})
