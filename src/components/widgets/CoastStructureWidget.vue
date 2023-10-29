<template>
  <div @click="() => (isMenu = false)" class="coast-structure-widget">
    <div class="coast-structure-widget__popup-wrapper">
      <PopupWidgetMenu :is-menu="isMenu" @is-menu="() => (isMenu = !isMenu)" icon-color="white" />
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
    <ChartBar v-if="isChart === 'chart'" />
    <div v-else class="coast-structure-widget__cash-flow">
      <WidgetTitle title-color="white" />
      <CashFlowBars income-color="green" cost-color="#c20000" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartBar from 'ui/progressbar/ChartBar.vue'
import PopupWidgetMenu from 'components/menus/PopupWidgetMenu.vue'
import CashFlowBars from 'ui/progressbar/CashFlowBars.vue'
import WidgetTitle from 'ui/titles/WidgetTitle.vue'

import { ref, watchEffect } from 'vue'
import { useResize } from '@/hooks/useResize'

const isMenu = ref<boolean>(false)

const isChart = ref<'chart' | 'progress'>('chart')

const { resizeWindow } = useResize()

watchEffect(() => {
  if (resizeWindow.value > 640) {
    isChart.value = 'chart'
  }
})
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
    right: 20px;
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
        top: 72px;
        right: 10px;
      }
      .widget-switch-bar {
        color: white;
        position: absolute;
        top: 36px;
        right: 10px;
      }
    }
  }
  &__cash-flow {
    width: 100%;
  }
}
</style>
