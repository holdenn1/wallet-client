<template>
  <WidgetPanelHeader header-title-text="Transaction history">
    <template #return>
      <router-link :to="{ name: 'default-widgets' }" class="widget-panel-header__link">
        <font-awesome-icon
          icon="circle-arrow-left"
          size="2xl"
          class="widget-panel-header__icon"
          style="color: white"
        />
      </router-link>
    </template>
  </WidgetPanelHeader>
  <div class="transaction-history">
    <CostsWidget />
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import CostsWidget from '../CostsWidget.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar.scss';
.transaction-history {
  height: calc(100vh - 120px);
  overflow-x: hidden;
  overflow-y: auto;
  @include scrollbar(4px, rgb(56, 56, 56));
}
</style>
