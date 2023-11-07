<template>
  <Doughnut id="my-chart-id" :options="data.chartOptions" :data="data.chartData" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { computed, toRefs } from 'vue'
import { Doughnut } from 'vue-chartjs'
import type { CategoriesPercentages } from '../widgets/CoastStructureWidget.vue'

ChartJS.register(ArcElement, Tooltip, Legend)
ChartJS.defaults.color = '#fff'
ChartJS.defaults.font.style = 'normal'

const props = defineProps<{
  monthlyCosts: CategoriesPercentages | undefined
}>()

const { monthlyCosts } = toRefs(props)

const data = computed(() => {
  return {
    chartData: {
      labels: [
        'Food',
        'Shopping',
        'Public transport',
        'Personal transport',
        'Home',
        'Internet',
        'Other'
      ],
      datasets: [
        {
          backgroundColor: [
            'rgb(245, 17, 17)',
            'rgb(69 163 2)',
            'rgb(51 31 215)',
            'rgb(199, 13, 245)',
            'rgb(10 153 163)',
            'rgb(16 59 92)',
            '#969696',
            monthlyCosts.value?.withoutValue ? '#ccc' : ''
          ],
          data: props.monthlyCosts
            ? [
                monthlyCosts.value?.Food ?? 0,
                monthlyCosts.value?.Shopping ?? 0,
                monthlyCosts.value?.['Public transport'] ?? 0,
                monthlyCosts.value?.['Personal transport'] ?? 0,
                monthlyCosts.value?.Home ?? 0,
                monthlyCosts.value?.Internet ?? 0,
                monthlyCosts.value?.Other ?? 0,
                monthlyCosts.value?.withoutValue ? 100 : 0
              ]
            : []
        }
      ]
    },

    chartOptions: {
      responsive: true
    }
  }
})
</script>

<style scoped></style>
