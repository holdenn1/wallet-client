<template>
  <div
    class="dynamic-widget-panel-wrapper"
    :class="{ 'dynamic-widget-panel_adaptive': isAdaptivePanel }"
  >
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useResize } from '@/hooks/useResize'

const routes = [
  'setting-operation',
  'categories',
  'select-account',
  'operation-details',
  'operations-history',
  'correct-balance',
  'add-credit-card',
  'user-settings'
]

const route = useRoute()

const { resizeWindow } = useResize()

const isAdaptivePanel = computed(() => {
  if (typeof route.name === 'string') {
    if (routes.includes(route.name) && resizeWindow.value < 640) {
      return true
    }
  }
  return false
})
</script>

<style lang="scss" scoped>
.dynamic-widget-panel-wrapper {
  grid-area: dynamic-widget-panel;
  position: relative;
  background-color: white;
  @media screen and (max-width: 640px) {
    width: 320px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -320px;
    z-index: 700;
  }
}
.dynamic-widget-panel_adaptive {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
