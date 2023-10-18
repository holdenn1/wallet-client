<template>
  <Accordion v-for="{ id, subcategories, ...rest } in category" :key="id">
    <template v-slot:title>
      <WidgetCategoryItem
        :category="{
          text: rest.category,
          icon: rest.categoryIcon,
          iconBackground: rest.categoryIconBackground
        }"
      />
    </template>
    <template v-slot:content v-if="subcategories.length">
      <h4 class="subcategory-title">Subcategories</h4>
      <WidgetCategoryItem
        v-for="subcategory in subcategories"
        :key="subcategory.id"
        :category="{
          iconBackground: subcategory.subcategoryIconBackground,
          icon: subcategory.subcategoryIcon,
          text: subcategory.subcategory
        }"
      />
    </template>
  </Accordion>
</template>

<script setup lang="ts">
import Accordion from 'ui/accordion/Accordion.vue'
import WidgetCategoryItem from 'components/items/WidgetCategoryItem.vue'

import type {Category} from "@/store/types/categoryStoreTypes";

defineProps<{ category: Category[] }>()
</script>

<style scoped></style>
