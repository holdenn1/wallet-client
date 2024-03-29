<template>
  <div @click="() => (isMenu = false)" class="coast-structure-widget">
    <div class="coast-structure-widget__popup-wrapper">
      <div class="widget-switch">
        <font-awesome-icon
          @click="() => (isChart = 'chart')"
          icon="chart-pie"
          class="widget-switch-chart"
          size="2xl"
        />
        <font-awesome-icon
          @click="() => (isChart = 'progress')"
          icon="bars-progress"
          class="widget-switch-bar"
          size="2xl"
        />
      </div>
    </div>
    <ChartBar v-if="isChart === 'chart'" :monthlyCosts="monthlyCosts" />
    <div v-else class="coast-structure-widget__cash-flow">
      <div class="cash-flow-title">
        <h3 class="cash-flow-title__title">Recent entries</h3>
        <p class="cash-flow-title__description">PER MONTH</p>
      </div>
      <CashFlowBars style="color: white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CashFlowBars from 'components/charts/CashFlowBars.vue'
import ChartBar from 'components/charts/ChartBar.vue'
import { ref, watch, watchEffect } from 'vue'
import { useResize } from '@/hooks/useResize'
import { useTransactionStore } from '@/store/transactionStore'
import { getMonthlyCostsRequest } from '@/api/requests'
import { storeToRefs } from 'pinia'

type MonthlyCostsResponse = {
  category: string
  amount: number
  percentage: number
}

export type CategoriesPercentages = {
  Food: number | undefined
  Shopping: number | undefined
  ['Public transport']: number | undefined
  ['Personal transport']: number | undefined
  Home: number | undefined
  Internet: number | undefined
  Other: number | undefined
  Leisure: number | undefined
  withoutValue?: number
}

const transactionStore = useTransactionStore()

const monthlyCosts = ref<CategoriesPercentages>()

const isMenu = ref<boolean>(false)

const isChart = ref<'chart' | 'progress'>('chart')

const { resizeWindow } = useResize()

const { transactionState } = storeToRefs(transactionStore)

watchEffect(() => {
  if (resizeWindow.value > 640) {
    isChart.value = 'chart'
  }
})

watch(
  () => transactionState.value.transactionHistoryList,
  async () => {
    try {
      const { data }: { data: MonthlyCostsResponse[] } = await getMonthlyCostsRequest()

      if (!data) {
        throw new Error()
      }

      const costsPercentages = data.reduce((acum, item: MonthlyCostsResponse) => {
        //@ts-ignore
        acum[item.category] = item.percentage
        return acum
      }, {} as CategoriesPercentages)

      if (Object.values(costsPercentages).length) {
        monthlyCosts.value = costsPercentages
      } else {
        monthlyCosts.value = { withoutValue: 100 } as CategoriesPercentages
      }
    } catch (e) {
      console.error(e)
    }
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';

.coast-structure-widget {
  grid-area: cost-structure;
  padding: 20px;
  background-color: hsl(199, 60%, 49%);
  @include flexCenter;
  overflow: hidden;
  position: relative;

 
  &__popup-wrapper {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    .widget-switch {
      position: relative;
      cursor: pointer;
      display: none;
      @media screen and (max-width: 760px) {
        display: block;
      }
      .widget-switch-chart {
        color: white;
        position: absolute;
        top: 52px;
        right: 10px;
      }
      .widget-switch-bar {
        color: white;
        position: absolute;
        top: 16px;
        right: 10px;
      }
    }
  }
  &__cash-flow {
    width: 100%;

    .cash-flow-title {
      &__title {
        color: white;
        text-align: left;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      &__description {
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        color: white;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
