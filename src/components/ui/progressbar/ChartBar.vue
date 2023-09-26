<template>
  <div class="chart-bar-wrapper">
    <Doughnut id="my-chart-id" :options="data.chartOptions" :data="data.chartData" />
  </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  chartData: {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs',],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  },
  chartOptions: {
    responsive: true
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.chart-bar-wrapper {
  width: 100%;
  height: 100%;
  padding: 20px;
  @include flexCenter;

}
</style>
