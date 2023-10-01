<template>
  <div class="coast-structure-widget">
    <ChartBar />
  </div>
</template>

<script setup lang="ts">
import ChartBar from 'ui/progressbar/ChartBar.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';

.coast-structure-widget {
  grid-area: cost-structure;
  padding: 20px;
  background-color: hsl(199, 60%, 49%);
  @include flexCenter;
  overflow: hidden;
}
</style>
