<template>
  <div class="default-widgets-wrapper">
    <CostsWidget />
    <CashFlowWidget />
  </div>
</template>

<script setup lang="ts">
import CostsWidget from 'components/widgets/CostsWidget.vue'
import CashFlowWidget from 'components/widgets/CashFlowWidget.vue'
</script>

<style lang="scss" scoped>
.default-widgets-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(320px, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'costs dynamic-widget-panel'
    'cash-flow dynamic-widget-panel';
}
</style>
