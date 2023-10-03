<template>
  <div class="cost-categories-menu">
    <div class="cost-categories-menu__title-wrapper">
      <router-link :to="{ name: 'default-widgets' }">
        <font-awesome-icon icon="circle-arrow-left" class="return-icon" size="2xl" />
      </router-link>
      <h3 class="cost-categories-menu__title">{{ categoryText }} Categories</h3>
    </div>
    <div class="categories-list">
      <AccordionList
        v-for="{ id, subcategories, ...rest } in categories"
        :key="id"
        :category-text="categoryText"
      >
        <template v-slot:category>
          <Category :category="rest" />
        </template>
        <template v-slot:subcategory>
          <Category
            v-for="{
              id,
              subcategoryBackgroundColor,
              subcategoryIcon,
              subcategoryText
            } in subcategories"
            :key="id"
            :category="{
              categoryBackgroundColor: subcategoryBackgroundColor,
              categoryIcon: subcategoryIcon,
              categoryText: subcategoryText
            }"
          />
        </template>
      </AccordionList>
    </div>
  </div>
</template>

<script setup lang="ts">
import Category from './CategoryContent.vue'
import AccordionList from 'ui/list/AccordionList.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const costCategories = [
  {
    id: 1,
    categoryIcon: 'fa-utensils',
    subcategories: [
      {
        id: 1,
        subcategoryIcon: 'fa-utensils',
        subcategoryText: 'text w',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      },
      {
        id: 2,
        subcategoryIcon: 'fa-utensils',
        subcategoryText: 'text ewqeqwe',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      },
      {
        id: 3,
        subcategoryIcon: 'fa-utensils',
        subcategoryText: 'text rewrds f sdf ',
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
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(17, 180, 245);',
    categoryText: 'Shopping'
  },
  {
    id: 3,
    categoryIcon: 'fa-house-user',
    subcategories: [
      {
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(245, 127, 17);',
    categoryText: 'Home'
  },
  {
    id: 4,
    categoryIcon: 'fa-bus',
    subcategories: [
      {
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(114, 114, 114);',
    categoryText: 'Public transport'
  },
  {
    id: 5,
    categoryIcon: 'fa-car',
    subcategories: [
      {
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
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
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
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
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(39, 52, 235);',
    categoryText: 'Internet'
  },
  {
    id: 8,
    categoryIcon: 'fa-bars',
    subcategories: [
      {
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(172, 92, 0);',
    categoryText: 'Other'
  }
]

const incomeCategories = [
  {
    id: 1,
    categoryIcon: 'fa-rotate-left',
    subcategories: [
      {
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(8 217 0);',
    categoryText: 'Compensation'
  },
  {
    id: 2,
    categoryIcon: 'fa-baby',
    subcategories: [
      {
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(17, 180, 245);',
    categoryText: 'Alimony'
  },
  {
    id: 3,
    categoryIcon: 'fa-dollar-sign',
    subcategories: [
      {
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(245, 127, 17);',
    categoryText: 'Rental income'
  },
  {
    id: 4,
    categoryIcon: 'fa-sack-dollar',
    subcategories: [
      {
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(210 176 6);',
    categoryText: 'Salary'
  },
  {
    id: 5,
    categoryIcon: 'fa-gift',
    subcategories: [
      {
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(199, 13, 245);',
    categoryText: 'Gifts'
  },
  {
    id: 6,
    categoryIcon: 'fa-coins',
    subcategories: [
      {
        id: '',
        subcategoryIcon: '',
        subcategoryText: '',
        subcategoryBackgroundColor: 'background-color: rgb(245, 17, 17);'
      }
    ],
    categoryBackgroundColor: 'background-color: rgb(13, 67, 245);',
    categoryText: 'Selling'
  }
]

const categories = computed(() => {
  if (route.query.type === 'cost') return costCategories
  if (route.query.type === 'income') return incomeCategories
  return null
})

const categoryText = computed(() => {
  if (route.query.type === 'cost') return 'Cost'
  if (route.query.type === 'income') return 'Income'
  return null
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
@import '@/styles/mixins/scrollbar.scss';
.cost-categories-menu {
  width: 100%;
  height: 100%;
  &__title-wrapper {
    width: 100%;
    height: 60px;
    background-color: hsl(199, 60%, 49%);
    border-left: 1px solid hsl(199, 76%, 34%);
    border-right: 1px solid hsl(199, 76%, 34%);
    @include flexCenter;
    position: relative;
    .return-icon {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translate(0, -50%);
      color: white;
    }
  }
  &__title {
    font-size: 20px;
    font-weight: 500;
    color: white;
  }

  .categories-list {
    width: 100%;
    height: calc(100vh - 120px);
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    @include scrollbar(4px, rgb(48, 48, 48));
  }
}
</style>
