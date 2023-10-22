<template>
  <div class="history-operations">
    <WidgetPanelHeader header-title-text="History" >
      <template #return>
        <button
      
        type="button"
        @click="() => router.go(-1)"
        class="widget-panel-header__link"
      >
        <font-awesome-icon icon="circle-arrow-left" size="2xl" class="widget-panel-header__icon" />
      </button>
      </template>
    </WidgetPanelHeader>
    <div class="cost-widget-wrapper">
      <CostsWidget />
    </div>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import CostsWidget from 'components/widgets/CostsWidget.vue'
import { useRouter } from 'vue-router';

const router = useRouter()
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
