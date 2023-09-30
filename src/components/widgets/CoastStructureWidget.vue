<template>
  <div class="coast-structure-widget-wrapper">
    <ChartBar />
  </div>
</template>

<script setup lang="ts">
import ChartBar from 'ui/progressbar/ChartBar.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';

.coast-structure-widget-wrapper {
  grid-area: cost-structure;
  padding: 20px;
  @include flexCenter;
}
</style>
