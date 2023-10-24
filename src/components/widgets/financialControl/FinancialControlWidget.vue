<template>
  <form @submit="onSubmit" class="financial-control-form">
    <div class="financial-control-widget">
      <div class="financial-control-wrapper">
        <TypeOperation
          @set-category-list="
            (category) => {
              categoryList = category
              setOpenSettingMenu('categories')
            }
          "
          :categoryList="categoryList"
        />
        <FinancialOperation
          :categoryList="categoryList"
          :paymentMethod="paymentMethod"
          @open-select-payment-method="setOpenSettingMenu('payment-method')"
          @open-setting-operation="setOpenSettingMenu('addition-information')"
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
          @set-payment-method="
            (data) => {
              isSettingOperation = false
              paymentMethod = data
            }
          "
          @close-select-payment-menu="() => (isSettingOperation = false)"
        />
        <AdditionInformation
          v-show="currentSettingMenu === 'addition-information'"
          @close-setting-operation-menu="() => (isSettingOperation = false)"
          :description-value="values.description"
          :recipient-value="values.recipient"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import Categories from './Categories.vue'
import TypeOperation from './TypeOperation.vue'
import FinancialOperation from './FinancialOperation.vue'
import SelectPaymentMethod from './SelectPaymentMethod.vue'
import AdditionInformation from './AdditionInformation.vue'

import { ref, watchEffect } from 'vue'

import type { OperationTypes, TransactionOptionMenus, PaymentMethodType } from './types'

import { useForm } from 'vee-validate'
import { useRoute, useRouter } from 'vue-router'
import { useToastify } from 'vue-toastify-3'

const isSettingOperation = ref<boolean>(false)

const categoryList = ref<OperationTypes>('')

const currentSettingMenu = ref<TransactionOptionMenus>('')

const paymentMethod = ref<PaymentMethodType | null>(null)

const route = useRoute()
const router = useRouter()

const { toastify } = useToastify()

const { values, handleSubmit, resetForm } = useForm({
  initialValues: {
    amount: 0,
    description: '',
    recipient: ''
  }
})

const onSubmit = handleSubmit((values, { resetForm }) => {
  if (!values.amount) {
    toastify('warning', 'Amount is required field')
    return
  }
  if (!paymentMethod.value) {
    toastify('warning', 'Please select payment method')
    return
  }
  if (!route.query.category) {
    toastify('warning', 'Please select category')
    return
  }
  console.log({
    amount: values.amount,
    paymentMethod: paymentMethod.value,
    description: values.recipient,
    recipient: values.recipient,
    typeOperation: categoryList.value,
    category: route.query.category,
    subcategory: route.query.subcategory
  })
  paymentMethod.value = null
  isSettingOperation.value = false
  categoryList.value = ''
  router.replace({ name: 'default-widgets' })
  resetForm()
})

watchEffect(() => {
  if (route.name !== 'default-widgets') {
    categoryList.value = ''
    paymentMethod.value = null
    isSettingOperation.value = false
    resetForm()
  }
})

const setOpenSettingMenu = (menu: TransactionOptionMenus) => {
  isSettingOperation.value = true
  currentSettingMenu.value = menu
  // router.replace({ name: 'default-widgets' })
}
</script>

<style lang="scss" scoped>
.financial-control-form {
  width: 100%;
  height: 100%;
  .financial-control-widget {
    position: relative;
    height: 100%;
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
      right: -100%;
      width: 100%;
      height: calc(100vh - 60px);
      z-index: 1000;

      @media screen and (max-width: 640px) {
        top: 0;
        left: 0;
      }
    }
  }
}
</style>
