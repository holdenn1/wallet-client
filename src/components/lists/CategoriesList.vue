<template>
  <Accordion v-for="{ id, subcategories, ...rest } in category" :key="id">
    <template v-slot:title>
      <router-link
        @click="
          (rest.category === 'Other' ||
            rest.category === 'Transfer') && mainStore.setSettingOperationMenu(false)
        "
        :to="{ query: { type: route.query.type, category: rest.category } }"
      >
        <WidgetCategoryItem
          :category="{
            text: rest.category,
            icon: rest.categoryIcon,
            iconBackground: rest.categoryIconBackground
          }"
        />
      </router-link>
    </template>
    <template v-slot:content v-if="subcategories.length">
      <SubcategoryContentWrapper>
        <h4 class="subcategory-title">Subcategories</h4>
        <router-link
          v-for="subcategory in subcategories"
          @click="mainStore.setSettingOperationMenu(false)"
          :key="subcategory.id"
          :to="{
            query: {
              type: route.query.type,
              category: rest.category,
              subcategory: subcategory.subcategory
            }
          }"
        >
          <WidgetCategoryItem
            :category="{
              iconBackground: subcategory.subcategoryIconBackground,
              icon: subcategory.subcategoryIcon,
              text: subcategory.subcategory
            }"
          />
        </router-link>
      </SubcategoryContentWrapper>
    </template>
  </Accordion>
</template>

<script setup lang="ts">
import Accordion from 'ui/accordion/Accordion.vue'
import SubcategoryContentWrapper from 'ui/wrappers/SubcategoryContentWrapper.vue'
import WidgetCategoryItem from 'components/items/WidgetCategoryItem.vue'

import type { Category } from '@/store/types/categoryStoreTypes'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/store/mainStore'

defineProps<{ category: Category[] | null }>()

const route = useRoute()

const mainStore = useMainStore()
</script>

<style scoped>
.subcategory-title {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}
</style>
