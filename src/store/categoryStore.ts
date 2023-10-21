import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {
  GetCategoriesResponse,
  InitialValuesCategoryStore
} from '@/store/types/categoryStoreTypes'
import { AxiosError } from 'axios'
import { useToastify } from 'vue-toastify-3'
import { getCategories } from '@/api/requests'

export const useCategoryStore = defineStore('category', () => {
  const categoryState = ref<InitialValuesCategoryStore>({
    cost: [],
    income: []
  })
  
  const { toastify } = useToastify()

  async function getCategoriesAction() {
    try {
      const {
        data: { cost, income, other }
      }: GetCategoriesResponse = await getCategories()

      categoryState.value.cost = [...cost, ...other]
      categoryState.value.income = [...income, ...other]
    } catch (e) {
      if (e instanceof AxiosError) {
        toastify('error', e.response?.data?.message || 'An error occurred')
        console.error(e)
      } else {
        console.error(e)
      }
    }
  }

  return { categoryState, getCategoriesAction }
})
