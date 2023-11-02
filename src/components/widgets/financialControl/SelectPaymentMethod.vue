<template>
  <div class="select-account">
    <WidgetPanelHeader header-title-text="Operation settings">
      <template #return>
        <button type="button" @click="$emit('close-select-payment-menu')">
          <font-awesome-icon icon="circle-arrow-left" size="2xl" style="color: white" />
        </button>
      </template>
    </WidgetPanelHeader>
    <WidgetPanelContentWrapper>
      <div @click="$emit('set-payment-method', { paymentMethod: PaymentMethodType.CASH })">
        <WidgetBalanceItem
          :balance="{
            bankIcon: 'fa-sack-dollar',
            bankBackgroundColor: 'background-color: rgb(8 217 0);',
            bankName: 'Cash',
            balance: String(userStore.userState.user?.cash)
          }"
        />
      </div>
      <WidgetBalanceItem
        @click="
          $emit('set-payment-method', {
            paymentMethod: PaymentMethodType.CREDIT_CARD,
            bankId: bank.id
          })
        "
        v-for="bank in userStore.userState.user?.creditCard"
        :key="bank.id"
        :balance="{
          balance: String(bank.balance),
          bankIcon: bank.bankIcon,
          bankName: bank.bankName,
          bankBackgroundColor: bank.bankBackgroundColor
        }"
      />
    </WidgetPanelContentWrapper>
  </div>
</template>

<script setup lang="ts">
import WidgetBalanceItem from 'components/items/WidgetBalanceItem.vue'
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import WidgetPanelContentWrapper from 'ui/wrappers/WidgetPanelContentWrapper.vue'

import { PaymentMethodType } from '@/components/forms/widgetForms/types'
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()

type PaymentMethodData = {
  paymentMethod: PaymentMethodType
  bankId?: number
}
defineEmits<{
  (e: 'close-select-payment-menu'): void
  (e: 'set-payment-method', data: PaymentMethodData): void
}>()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar.scss';
.select-account {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>
