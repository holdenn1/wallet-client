import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const main = ref<{
    isModalVisible: boolean
  }>({ isModalVisible: false })

  function setModalVisible(visible: boolean) {
    main.value.isModalVisible = visible
  }

  return { main, setModalVisible }
})
