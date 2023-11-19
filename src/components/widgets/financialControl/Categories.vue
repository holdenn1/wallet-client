<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cost-categories-menu">
    <WidgetPanelHeader :header-title-text="`${title} Categories`">
      <template #return>
        <button type="button" @click="$emit('close-category-list')">
          <font-awesome-icon icon="circle-arrow-left" size="2xl" style="color: white" />
        </button>
      </template>
    </WidgetPanelHeader>
    <WidgetPanelContentWrapper>
      <CategoriesList :category="currentList" />
    </WidgetPanelContentWrapper>
  </div>
</template>

<script setup lang="ts">
import CategoriesList from 'components/lists/CategoriesList.vue'
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import WidgetPanelContentWrapper from 'ui/wrappers/WidgetPanelContentWrapper.vue'

import { useCategoryStore } from '@/store/categoryStore'

import { ref, toRefs, watchEffect } from 'vue'

import type { OperationTypes } from '@/components/forms/widgetForms/types'

const props = defineProps<{ categoryList: OperationTypes }>()
defineEmits<{
  (e: 'close-category-list'): void
}>()

const { categoryList } = toRefs(props)
const categoryStore = useCategoryStore()



const title = ref()
const currentList = ref()

watchEffect(() => {
  switch (categoryList.value) {
    case 'cost': {
      title.value = 'Cost'
      currentList.value = categoryStore.categoryState.cost
      break
    }
    case 'income': {
      title.value = 'Income'
      currentList.value = categoryStore.categoryState.income
      break
    }
    case 'transfer': {
      title.value = 'Transfer'
      currentList.value = categoryStore.categoryState.transfer
      break
    }
    default: {
      title.value = null
      currentList.value = null
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar.scss';
.cost-categories-menu {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>