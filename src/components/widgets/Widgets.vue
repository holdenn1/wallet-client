<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="widget-wrapper">
    <FinancialControlWidget />
    <CoastStructureWidget />
    <WidgetPanel />
  </div>
</template>

<script setup lang="ts">
import CoastStructureWidget from './CoastStructureWidget.vue'
import FinancialControlWidget from './financialControl/FinancialControlWidget.vue'
import WidgetPanel from './widget-panel/WidgetPanel.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar';
.widget-wrapper {
  grid-area: wallet-content;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(320px, 1fr) minmax(320px, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'financial-control dynamic-widget-panel'
    'cost-structure dynamic-widget-panel';
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'financial-control '
      'cost-structure ';
  }
}
</style>
