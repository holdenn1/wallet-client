<template>
  <div class="select-account">
    <WidgetPanelHeader header-title-text="Operation settings" />
    <div class="accounts-list">
      <WidgetCategoryItem v-for="{ id, ...rest } in accounts" :key="id" :category="rest" />
    </div>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import WidgetCategoryItem from 'components/items/WidgetCategoryItem.vue'

const accounts = [
  {
    id: 1,
    categoryIcon: 'fa-sack-dollar',
    categoryBackgroundColor: 'background-color: rgb(8 217 0);',
    categoryText: 'Compensation'
  },
  {
    id: 2,
    categoryIcon: 'fa-credit-card',
    categoryBackgroundColor: 'background-color: rgb(232 66 15);',
    categoryText: 'Alimony'
  }
]
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar.scss';
.select-account {
  width: 100%;
  height: 100%;

  .accounts-list {
    width: 100%;
    height: calc(100vh - 120px);
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    @include scrollbar(4px, rgb(48, 48, 48));
  }
}
</style>
