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
      <div @click="$emit('set-payment-method', PaymentMethodType.CASH)">
        <WidgetBalanceItem
          :balance="{
            icon: 'fa-sack-dollar',
            iconBackground: 'background-color: rgb(8 217 0);',
            text: 'Cash',
            balance: '2200.00'
          }"
        />
      </div>
      <!--This will be credit cards list      -->
      <!--      <WidgetBalanceItem v-for="{ id, ...rest } in balance" :key="id" :balance="rest" />-->
    </WidgetPanelContentWrapper>
  </div>
</template>

<script setup lang="ts">
import WidgetBalanceItem from 'components/items/WidgetBalanceItem.vue'
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import WidgetPanelContentWrapper from 'ui/wrappers/WidgetPanelContentWrapper.vue'

import { PaymentMethodType } from '@/components/forms/widgetForms/types';



defineEmits<{
  (e: 'close-select-payment-menu'): void
  (e: 'set-payment-method', data: PaymentMethodType): void
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