<template>
  <div class="select-account">
    <WidgetPanelHeader header-title-text="Operation settings" />
    <WidgetPanelContentWrapper>
      <WidgetCategoryItem v-for="{ id, ...rest } in accounts" :key="id" :category="rest" />
    </WidgetPanelContentWrapper>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import WidgetCategoryItem from 'components/items/WidgetCategoryItem.vue'
import WidgetPanelContentWrapper from 'ui/wrappers/WidgetPanelContentWrapper.vue'


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


}
</style>
