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
import FinancialControlWidget from './FinancialControlWidget.vue'
import WidgetPanel from 'components/sidebars/widget-panel/WidgetPanel.vue'



</script>

<style lang="scss" scoped>
.widget-wrapper {
  grid-area: wallet-content;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(320px, 1fr) minmax(320px, 1fr);
  grid-template-rows: 1fr minmax(300px, 1fr);
  gap: 0px 0px;
  grid-template-areas:
    'financial-control dynamic-widget-panel'
    'cost-structure dynamic-widget-panel';
}
</style>
