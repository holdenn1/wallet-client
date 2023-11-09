<template>
  <h3 class="widget-title" :style="{ color: titleColor }">Recent entries</h3>
  <p class="widget-description" :style="{ color: titleColor }">{{ title }}</p>
</template>

<script setup lang="ts">
import type { Period } from '@/api/requests/types'
import { computed } from 'vue'

const props = defineProps<{ titleColor?: 'grey' | 'white'; period: Period }>()


const title = computed(() => {
  if (props.period === 'today') {
    return 'In a day'
  }
  if (props.period === 'week') {
    return 'In a week'
  }
  if (props.period === 'month') {
    return 'Per month'
  }
  if (props.period === 'year') {
    return 'In a year'
  }
  return 'Per month'
})
</script>

<style scoped>
.widget-title {
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.widget-description {
  font-size: 14px;
  font-weight: 500;
  color: grey;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 20px;
}
</style>
