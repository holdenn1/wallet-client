<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cost-categories-menu">
    <WidgetPanelHeader :header-title-text="`${categoryText} Categories`">
      <template #return>
        <button type="button" @click="$emit('close-category-list')">
          <font-awesome-icon icon="circle-arrow-left" size="2xl" style="color: white" />
        </button>
      </template>
    </WidgetPanelHeader>
    <WidgetPanelContentWrapper>
      <CategoriesList
      
        :category="
          categoryList === 'cost'
            ? categoryStore.categoryState.cost
            : categoryStore.categoryState.income
        "
      />
    </WidgetPanelContentWrapper>
  </div>
</template>

<script setup lang="ts">
import CategoriesList from 'components/lists/CategoriesList.vue'
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import WidgetPanelContentWrapper from 'ui/wrappers/WidgetPanelContentWrapper.vue'

import { useCategoryStore } from '@/store/categoryStore'

import { computed, toRefs } from 'vue'
import type { OperationTypes } from './types'

const props = defineProps<{ categoryList: OperationTypes }>()
defineEmits<{
  (e: 'close-category-list'): void
}>()

const { categoryList } = toRefs(props)
const categoryStore = useCategoryStore()

/*
const costCategories = [
  {
    id: 1,
    categoryIcon: 'fa-utensils',
    subcategories: [
      {
        id: 1,
        subcategoryIcon: 'fa-mug-saucer',
        subcategoryText: 'Cafes and restaurants',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      },
      {
        id: 2,
        subcategoryIcon: 'fa-basket-shopping',
        subcategoryText: 'Products',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      },
      {
        id: 3,
        subcategoryIcon: 'fa-burger',
        subcategoryText: 'Fast food',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(245, 17, 17);',
    categoryText: 'Food'
  },
  {
    id: 2,
    categoryIcon: 'fa-bag-shopping',
    subcategories: [
      {
        id: 1,
        subcategoryIcon: 'fa-shirt',
        subcategoryText: 'Clothes',
        subcategoryBackgroundColor: 'background-color: rgb(69 163 2);'
      },
      {
        id: 2,
        subcategoryIcon: 'fa-shield-dog',
        subcategoryText: 'Pets',
        subcategoryBackgroundColor: 'background-color: rgb(69 163 2);'
      },
      {
        id: 3,
        subcategoryIcon: 'fa-clock',
        subcategoryText: 'Free time',
        subcategoryBackgroundColor: 'background-color: rgb(69 163 2);'
      },
      {
        id: 4,
        subcategoryIcon: 'fa-child-reaching',
        subcategoryText: 'Children',
        subcategoryBackgroundColor: 'background-color: rgb(69 163 2);'
      },
      {
        id: 5,
        subcategoryIcon: 'fa-house-user',
        subcategoryText: 'Household',
        subcategoryBackgroundColor: 'background-color: rgb(69 163 2);'
      },
      {
        id: 6,
        subcategoryIcon: 'fa-pump-soap',
        subcategoryText: 'Beauty and health',
        subcategoryBackgroundColor: 'background-color: rgb(69 163 2);'
      },
      {
        id: 7,
        subcategoryIcon: 'fa-suitcase-medical',
        subcategoryText: 'Medicine',
        subcategoryBackgroundColor: 'background-color: rgb(69 163 2);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(69 163 2);',
    categoryText: 'Shopping'
  },
  {
    id: 3,
    categoryIcon: 'fa-house-user',
    subcategories: [
      {
        id: 1,
        subcategoryIcon: 'fa-money-bill-1',
        subcategoryText: 'Communal services',
        subcategoryBackgroundColor: 'background-color: rgb(10 153 163);'
      },
      {
        id: 2,
        subcategoryIcon: 'fa-key',
        subcategoryText: 'Rent',
        subcategoryBackgroundColor: 'background-color: rgb(10 153 163);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(10 153 163);',
    categoryText: 'Home'
  },

  {
    id: 4,
    categoryIcon: 'fa-bus',
    subcategories: [
      {
        id: 1,
        subcategoryIcon: 'fa-taxi',
        subcategoryText: 'Taxi',
        subcategoryBackgroundColor: 'background-color: rgb(215 31 70);'
      },
      {
        id: 2,
        subcategoryIcon: 'fa-plane',
        subcategoryText: 'Travels',
        subcategoryBackgroundColor: 'background-color: rgb(215 31 70);'
      },
      {
        id: 3,
        subcategoryIcon: 'fa-passport',
        subcategoryText: 'Business trip',
        subcategoryBackgroundColor: 'background-color: rgb(215 31 70);'
      },
      {
        id: 4,
        subcategoryIcon: 'fa-bus-simple',
        subcategoryText: 'Public transport',
        subcategoryBackgroundColor: 'background-color: rgb(215 31 70);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(215 31 70);',
    categoryText: 'Public transport'
  },
  {
    id: 5,
    categoryIcon: 'fa-car',
    subcategories: [
      {
        id: 1,
        subcategoryIcon: 'fa-gas-pump',
        subcategoryText: 'Fuel',
        subcategoryBackgroundColor: 'background-color: rgb(199, 13, 245);'
      },
      {
        id: 2,
        subcategoryIcon: 'fa-square-parking',
        subcategoryText: 'Parking',
        subcategoryBackgroundColor: 'background-color: rgb(199, 13, 245);'
      },
      {
        id: 3,
        subcategoryIcon: 'fa-screwdriver-wrench',
        subcategoryText: 'Service',
        subcategoryBackgroundColor: 'background-color: rgb(199, 13, 245);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(199, 13, 245);',
    categoryText: 'Personal transport'
  },
  {
    id: 6,
    categoryIcon: 'fa-person',
    subcategories: [
      {
        id: 1,
        subcategoryIcon: 'fa-gifts',
        subcategoryText: 'Gifts',
        subcategoryBackgroundColor: 'background-color: rgb(13, 67, 245);'
      },
      {
        id: 2,
        subcategoryIcon: 'fa-umbrella-beach',
        subcategoryText: 'Vacation',
        subcategoryBackgroundColor: 'background-color: rgb(13, 67, 245);'
      },
      {
        id: 3,
        subcategoryIcon: 'fa-book-open',
        subcategoryText: 'Books',
        subcategoryBackgroundColor: 'background-color: rgb(13, 67, 245);'
      },
      {
        id: 4,
        subcategoryIcon: 'fa-user-graduate',
        subcategoryText: 'Education',
        subcategoryBackgroundColor: 'background-color: rgb(13, 67, 245);'
      },
      {
        id: 5,
        subcategoryIcon: 'fa-dumbbell',
        subcategoryText: 'Sport',
        subcategoryBackgroundColor: 'background-color: rgb(13, 67, 245);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(13, 67, 245);',
    categoryText: 'Leisure'
  },
  {
    id: 7,
    categoryIcon: 'fa-desktop',

    subcategories: [
      {
        id: 1,
        subcategoryIcon: 'fa-phone-volume',
        subcategoryText: 'Communication',
        subcategoryBackgroundColor: 'background-color: rgb(16 59 92);;'
      },
      {
        id: 2,
        subcategoryIcon: 'fa-wifi',
        subcategoryText: 'Internet',
        subcategoryBackgroundColor: 'background-color: rgb(16 59 92);;'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(16 59 92);;',
    categoryText: 'Internet'
  }
]
*/
/*
const incomeCategories = [
  {
    id: 1,
    categoryIcon: 'fa-rotate-left',
    categoryBackgroundColor: 'background-color: rgb(8 217 0);',
    categoryText: 'Compensation'
  },
  {
    id: 2,
    categoryIcon: 'fa-baby',
    categoryBackgroundColor: 'background-color: rgb(17, 180, 245);',
    categoryText: 'Alimony'
  },
  {
    id: 3,
    categoryIcon: 'fa-dollar-sign',
    categoryBackgroundColor: 'background-color: rgb(245, 127, 17);',
    categoryText: 'Rental income'
  },
  {
    id: 4,
    categoryIcon: 'fa-sack-dollar',
    categoryBackgroundColor: 'background-color: rgb(210 176 6);',
    categoryText: 'Salary'
  },
  {
    id: 5,
    categoryIcon: 'fa-gift',
    categoryBackgroundColor: 'background-color: rgb(199, 13, 245);',
    categoryText: 'Gifts'
  },
  {
    id: 6,
    categoryIcon: 'fa-coins',
    categoryBackgroundColor: 'background-color: rgb(13, 67, 245);',
    categoryText: 'Selling'
  }
]*/

const categoryText = computed(() => {
  if (categoryList.value === 'cost') return 'Cost'
  if (categoryList.value === 'income') return 'Income'
  return null
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar.scss';
.cost-categories-menu {
  width: 100%;
  height: 100%;
}
</style>
