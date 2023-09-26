<template>
  <div class="coast-structure-widget-wrapper">
    <ChartBar />
  </div>
</template>

<script setup lang="ts">
import ChartBar from 'ui/progressbar/ChartBar.vue'
</script>

<style lang="scss" scoped>
.coast-structure-widget-wrapper {
  grid-area: cost-structure;
}
</style>
