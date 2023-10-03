<template>
  <div class="category-slot" @click="toggleAccordion()">
    <slot name="category" />
  </div>
  <div class="subcategory-slot" v-show="isOpen">
    <h4 class="subcategory-slot__text">Subcategories</h4>
    <slot name="subcategory" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, toRefs } from 'vue'

const isOpen = ref<boolean>(false)

const props = defineProps<{ categoryText: 'Cost' | 'Income' | null }>()

const { categoryText } = toRefs(props)

watch(categoryText, () => {
  isOpen.value = false
})

const toggleAccordion = () => {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
.category-slot {
  margin-bottom: 12px;
}

.subcategory-slot {
  margin: 0 10px 12px 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(182, 182, 182);
  &__text {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
