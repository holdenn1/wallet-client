<template>
  <div class="cash-flow">
    <div class="cash-flow__income-progress-line-wrapper">
      <div class="cash-flow__progressbar-title">
        <span>Income</span>
        <span style="color: rgb(0, 194, 65)"> + {{ monthlySummary?.totalIncome }} uah</span>
      </div>
      <div class="progressbar-line">
        <div
          class="progressbar-line__filler"
          :style="`width: ${
            monthlySummary?.totalIncome / 100 ?? 0
          }%; background-color: rgb(0, 194, 65)`"
        >
          <span class="progressbar-line__label"></span>
        </div>
      </div>
    </div>
    <div class="cash-flow__costs-progress-line-wrapper">
      <div class="cash-flow__progressbar-title">
        <span>Costs</span>
        <span style="color: rgb(191, 3, 3)"> - {{ monthlySummary?.totalCosts }} uah</span>
      </div>
      <div class="progressbar-line">
        <div
          class="progressbar-line__filler"
          :style="`width: ${
            monthlySummary?.totalCosts / 100 ?? 0
          }%; background-color: rgb(233, 3, 3)`"
        >
          <span class="progressbar-line__label"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
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
    .progressbar-line {
      height: 20px;
      width: 100%;
      background-color: #cfcfcf;
      border-radius: 50px;

      &__filler {
        height: 100%;
        border-radius: inherit;
        text-align: right;
      }
      &__label {
        padding: 5px;
        color: white;
        font-weight: 500;
      }
    }
    span {
      display: block;
      margin-bottom: 12px;
    }
  }
}
</style>
