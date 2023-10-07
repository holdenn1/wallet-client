<template>
  <div class="widget-panel-content-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar.scss';
.widget-panel-content-wrapper {
  width: 100%;
  height: calc(100vh - 120px);
  padding: 12px;
  overflow-x: hidden;
  overflow-y: auto;
  @include scrollbar(4px, rgb(48, 48, 48));
}
</style>
