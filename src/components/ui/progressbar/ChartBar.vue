<template>
  <Doughnut id="my-chart-id" :options="data.chartOptions" :data="data.chartData" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)
ChartJS.defaults.color = "#fff";
ChartJS.defaults.font.style  = "normal";

const data = {
  chartData: {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
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

<style scoped></style>
