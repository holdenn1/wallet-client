<template>
  <div class="dynamic-widget-panel-wrapper">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.dynamic-widget-panel-wrapper {
  grid-area: dynamic-widget-panel;
  position: relative;
  @media screen and (max-width: 640px) {
    position: absolute;
    top: 0;
    right: -320px;
  }
}
</style>
