<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="category">
    <div class="category__icon-wrapper" :style="category.iconBackground">
      <font-awesome-icon :icon="category.icon" style="color: white" size="2xl" />
    </div>
    <span class="category__text">{{ category.text }}</span>
    <slot name="balance" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  category: {
    text: string
    icon: string
    iconBackground: string
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
  &__balance-wrapper {
    margin: 0 40px 0 auto;
    .category-balance {
      font-weight: 600;
    }
  }
}
</style>
