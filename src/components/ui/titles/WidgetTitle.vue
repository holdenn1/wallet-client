<template>
  <h3 class="widget-title" :style="{ color: titleColor }">Recent entries</h3>
  <p class="widget-description" :style="{ color: titleColor }">{{ title }}</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router';

defineProps<{ titleColor?: 'grey' | 'white';}>()

const route = useRoute()

const title = computed(() => {

  if (route.query.period === 'today') {
    return 'In a day'
  }
  if (route.query.period === 'week') {
    return 'In a week'
  }
  if (route.query.period=== 'month') {
    return 'Per month'
  }
  if (route.query.period === 'year') {
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
