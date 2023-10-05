<template>
  <div @click="() => (isMenu = false)" class="coast-structure-widget">
    <div class="coast-structure-widget__popup-wrapper">
      <PopupWidgetMenu :is-menu="isMenu" @is-menu="() => (isMenu = !isMenu)" icon-color="white" />
    </div>
    <ChartBar />
  </div>
</template>

<script setup lang="ts">
import ChartBar from 'ui/progressbar/ChartBar.vue'
import PopupWidgetMenu from 'components/menus/PopupWidgetMenu.vue'

import { ref } from 'vue'

const isMenu = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';

.coast-structure-widget {
  grid-area: cost-structure;
  padding: 20px;
  background-color: hsl(199, 60%, 49%);
  @include flexCenter;
  overflow: hidden;
  position: relative;
  &__popup-wrapper {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
</style>
