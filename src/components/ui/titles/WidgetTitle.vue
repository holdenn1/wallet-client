<template>
  <h3 class="widget-title">Recent entries</h3>
  <p class="widget-description" :style="{ color: titleColor }">The last 30 days</p>
</template>

<script setup lang="ts">
defineProps<{ titleColor?: 'grey' | 'white' }>()
</script>

<style scoped>
.widget-title {
  text-align: left;
  font-size: 22px;
  margin-bottom: 10px;
}
.widget-description {
  font-size: 14px;
  font-weight: 600;
  color: grey;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 20px;
}
</style>
