<template>
  <div class="operation-details">
    <UpdateOperationForm
      :amount="currentTransaction?.amount"
      :create-at="currentTransaction?.createAt as unknown as string"
      :description="currentTransaction?.description"
      :recipient="currentTransaction?.recipient"
    >
      <template #header-form>
        <WidgetPanelHeader header-title-text="Details">
          <template #return>
            <button
              type="button"
              @click="() => router.replace({ name: 'default-widgets' })"
              class="widget-panel-header__link"
            >
              <font-awesome-icon icon="circle-arrow-left" size="2xl" style="color: white" />
            </button>
          </template>
          <template #confirm>
            <button type="submit">
              <font-awesome-icon icon="check" size="2xl" style="color: white" />
            </button>
          </template>
        </WidgetPanelHeader>
      </template>
    </UpdateOperationForm>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import UpdateOperationForm from 'forms/widgetForms/UpdateOperationForm.vue'

import { useTransactionStore } from '@/store/transactionStore'

import { useRoute, useRouter } from 'vue-router'
import { ref, watchEffect } from 'vue'

import type { Transaction } from '@/store/types/transactionStoreTypes'

const transactionStore = useTransactionStore()

const router = useRouter()
const route = useRoute()

const currentTransaction = ref<Transaction>()

watchEffect(async () => {
  if (route.params.operationId) {
    currentTransaction.value = transactionStore.transactionState.transactionHistoryList.find(
      (transaction) => transaction.id === Number(route.params.operationId)
    )
  }
})
</script>

<style lang="scss" scoped>
.operation-details {
  width: 100%;
  height: 100%;
}
</style>
