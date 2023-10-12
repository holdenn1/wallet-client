<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="category">
    <div class="category__icon-wrapper" :style="category.categoryIconBackground">
      <font-awesome-icon :icon="category.categoryIcon" style="color: white" size="2xl" />
    </div>
    <span class="category__text">{{ category.category }}</span>
  </div>
</template>

<script setup lang="ts">
import type { CategoryType } from '@/store/types/categoryStoreTypes'

defineProps<{
  category: {
    type: CategoryType
    category: string
    categoryIcon: string
    categoryIconBackground: string
  }
}>()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';

.category {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 12px;

  &__text {
    margin-left: 20px;
    font-weight: 500;
  }
  &__icon-wrapper {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    @include flexCenter;
    &:last-child {
      margin: 0;
    }
  }
}
</style>
