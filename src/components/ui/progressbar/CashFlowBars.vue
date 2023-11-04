<template>
  <div class="cash-flow">
    <div class="cash-flow__income-progress-line-wrapper">
      <div class="cash-flow__progressbar-title">
        <span>Income</span>
        <span style="color: rgb(0, 194, 65);"> + {{ monthlySummary?.totalIncome }} uah</span>
      </div>
      <ProgressLine bgcolor="rgb(0, 194, 65)" :completed="monthlySummary?.totalIncome / 100 ?? 0" />
    </div>
    <div class="cash-flow__costs-progress-line-wrapper">
      <div class="cash-flow__progressbar-title">
        <span>Costs</span>
        <span style="color: rgb(191, 3, 3);"> - {{ monthlySummary?.totalCosts }} uah</span>
      </div>
      <ProgressLine bgcolor="rgb(233, 3, 3)" :completed="monthlySummary?.totalCosts / 100 ?? 0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ProgressLine from './ProgressLine.vue'
import { getMonthlySummary } from '@/api/requests'
import { useTransactionStore } from '@/store/transactionStore'

type MonthlySummaryResponse = {
  totalCosts: number
  totalIncome: number
}

const transactionStore = useTransactionStore()

const monthlySummary = ref<MonthlySummaryResponse>({ totalCosts: 0, totalIncome: 0 })

watch(
  () => transactionStore.transactionState.transactionHistoryList.length,
  async () => {
    try {
      const { data }: { data: MonthlySummaryResponse } = await getMonthlySummary()

      if (!data) {
        throw new Error()
      }

      monthlySummary.value!.totalCosts = data.totalCosts
      monthlySummary.value!.totalIncome = data.totalIncome
    } catch (e) {
      console.error(e)
    }
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-js-sb-al-ctr.scss';

.cash-flow {
  font-weight: 500;
  padding: 10px 20px;
  overflow: hidden;
  width: 100%;

  &__progressbar-title {
    @include flex-js-sb-al-ctr;
  }
  &__income-progress-line-wrapper {
    margin-bottom: 20px;
    span {
      display: block;
      margin-bottom: 12px;
    }
  }
  &__costs-progress-line-wrapper {
    span {
      display: block;
      margin-bottom: 12px;
    }
  }
}
</style>
