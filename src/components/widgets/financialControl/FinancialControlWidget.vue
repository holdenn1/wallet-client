<template>
  <div class="financial-control-widget">
    <div class="financial-control-wrapper">
      <TypeOperation
        @set-category-list="
          (category) => {
            isSettingOperation = true
            categoryList = category
            currentSettingMenu = 'categories'
          }
        "
        :categoryList="categoryList"
      />
      <FinancialOperation
        @open-select-payment-method="
          () => {
            isSettingOperation = true
            currentSettingMenu = 'payment-method'
          }
        "
        @open-setting-operation="
          () => {
            currentSettingMenu = 'addition-information'
            isSettingOperation = true
          }
        "
      />
    </div>
    <div v-show="isSettingOperation" :class="{ settings: isSettingOperation }">
      <Categories
        v-show="currentSettingMenu === 'categories'"
        @close-category-list="() => (isSettingOperation = false)"
        :categoryList="categoryList"
      />
      <SelectPaymentMethod
        v-show="currentSettingMenu === 'payment-method'"
        @close-select-payment-menu="() => (isSettingOperation = false)"
      />
      <AdditionInformation
        v-show="currentSettingMenu === 'addition-information'"
        @close-setting-operation-menu="() => (isSettingOperation = false)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TypeOperation from './TypeOperation.vue'
import FinancialOperation from './FinancialOperation.vue'
import Categories from './Categories.vue'
import SelectPaymentMethod from './SelectPaymentMethod.vue'
import AdditionInformation from './AdditionInformation.vue'
import { ref } from 'vue'

const isSettingOperation = ref<boolean>(false)
const categoryList = ref<'cost' | 'income' | 'transfer' | null>(null)
const currentSettingMenu = ref<'categories' | 'payment-method' | 'addition-information' | ''>('')
// import { computed } from 'vue'
// import { useRoute } from 'vue-router'

// const route = useRoute()

// const operations = {
//   cost: 'cost',
//   income: 'income',
//   transfer: 'transfer'
// }

// const operationType = computed(() => {
//   if (route.query.type) {
//     //@ts-ignore
//     return operations[route.query.type]
//   } else {
//     return ''
//   }
// })
</script>

<style lang="scss" scoped>
.financial-control-widget {
  position: relative;
  .financial-control-wrapper {
    grid-area: financial-control;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: hsl(199, 60%, 49%);
  }
  .settings {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    z-index: 1000;
    background-color: white;
  }
}
</style>
