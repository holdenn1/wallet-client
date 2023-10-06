<template>
  <div class="history-operations">
    <WidgetPanelHeader header-title-text="History" />
    <div class="cost-widget-wrapper">
      <CostsWidget />
    </div>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import CostsWidget from 'components/widgets/CostsWidget.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar.scss';

.history-operations{
  width: 100%;
  height: 100%;
  .cost-widget-wrapper{
    width: 100%;
    height: calc(100vh - 120px);
    overflow-x: hidden;
    overflow-y: auto;
    @include scrollbar(4px, rgb(48, 48, 48));
  }
}
</style>
