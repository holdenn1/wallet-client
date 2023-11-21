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
      <div
        v-show="mainState.isSettingOperation"
        :class="{ settings: mainState.isSettingOperation }"
      >
        <Categories
          v-show="currentSettingMenu === 'categories'"
          @close-category-list="() => (mainState.isSettingOperation = false)"
          :categoryList="categoryList"
        />
        <SelectPaymentMethod
          v-show="currentSettingMenu === 'payment-method'"
          @set-payment-method="
            (data) => {
              mainStore.setSettingOperationMenu(false)
              paymentMethod = data.paymentMethod
              bank = data.bankId
            }
          "
          @close-select-payment-menu="() => mainStore.setSettingOperationMenu(false)"
        />
        <AdditionInformation
          v-show="currentSettingMenu === 'addition-information'"
          @close-setting-operation-menu="() => mainStore.setSettingOperationMenu(false)"
          :description-value="values.description"
          :recipient-value="values.recipient"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import Categories from 'components/widgets/financialControl/Categories.vue'
import TypeOperation from 'components/widgets/financialControl/TypeOperation.vue'
import FinancialOperation from 'components/widgets/financialControl/FinancialOperation.vue'
import SelectPaymentMethod from 'components/widgets/financialControl/SelectPaymentMethod.vue'
import AdditionInformation from 'components/widgets/financialControl/AdditionInformation.vue'

import { createTransactionRequest } from '@/api/requests'
import { useTransactionStore } from '@/store/transactionStore'
import { useUserStore } from '@/store/userStore'
import { useMainStore } from '@/store/mainStore'

import { ref, watch } from 'vue'
import { AxiosError } from 'axios'
import { storeToRefs } from 'pinia'
import { useForm } from 'vee-validate'
import { useToastify } from 'vue-toastify-3'
import { useRoute, useRouter } from 'vue-router'

import type { OperationTypes, TransactionOptionMenus, PaymentMethodType } from './types'
import type { CreateTransactionResponse } from '@/store/types/transactionStoreTypes'

const categoryList = ref<OperationTypes>('')

const currentSettingMenu = ref<TransactionOptionMenus>('')

const paymentMethod = ref<PaymentMethodType | null>(null)
const bank = ref<number>()

const route = useRoute()
const router = useRouter()

const { toastify } = useToastify()

const transactionState = useTransactionStore()

const userStore = useUserStore()

const mainStore = useMainStore()

const { mainState } = storeToRefs(mainStore)

const { values, handleSubmit } = useForm({
  initialValues: {
    amount: 0,
    description: '',
    recipient: ''
  }
})

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  const amountValue = String(values.amount).replace(/[^0-9]/g, '')

  try {
    if (!amountValue) {
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

    const { data }: CreateTransactionResponse = await createTransactionRequest({
      amount: String(amountValue),
      paymentMethod: paymentMethod.value ?? '',
      cardId: bank.value ?? undefined,
      description: values.description,
      recipient: values.recipient,
      typeOperation: categoryList.value,
      category: (route.query.category as string) ?? '',
      subcategory: (route.query.subcategory as string) ?? ''
    })

    if (!data) {
      throw new Error()
    }

    transactionState.addTransactionToList(data)
    userStore.correctUserBalance({
      amount: data.paymentMethod === 'cash' ? data.user.cash : data.amount,
      creditCard: data.creditCard,
      paymentMethod: data.paymentMethod,
      type: data.type
    })

    paymentMethod.value = null
    mainStore.setSettingOperationMenu(false)
    categoryList.value = ''
    resetForm()
  } catch (e) {
    if (e instanceof AxiosError) {
      toastify('error', e.response?.data?.message || 'An error occurred')
      console.error(e)
    } else {
      console.error(e)
    }
  }
})

const setOpenSettingMenu = (menu: TransactionOptionMenus) => {
  mainStore.setSettingOperationMenu(true)
  currentSettingMenu.value = menu
}

watch(categoryList, () => {
  router.replace({ name: 'default-widgets' })
})
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

      @media screen and (max-width: 760px) {
        top: 0;
        left: 0;
        height: 100vh;
      }
    }
  }
}
</style>
