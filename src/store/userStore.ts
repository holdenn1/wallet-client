import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { InitialValuesUserStore } from './types/userStoreTypes'

export const useMainStore = defineStore('user', () => {
  const user = ref<InitialValuesUserStore>({
    user: null
  })

  return {user}
})
