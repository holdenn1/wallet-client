<template>
  <div @click="() => (isMenu = false)" class="cash-flow-widget">
    <PopupWidgetMenu :is-menu="isMenu" @is-menu="() => (isMenu = !isMenu)" />
    <WidgetTitle />
    <CashFlowBars income-color="#00c241" cost-color="#c20000" />
  </div>
</template>

<script setup lang="ts">
import PopupWidgetMenu from 'components/menus/PopupWidgetMenu.vue'
import CashFlowBars from 'ui/progressbar/CashFlowBars.vue'
import WidgetTitle from 'ui/titles/WidgetTitle.vue'

import { ref } from 'vue'

const isMenu = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.cash-flow-widget {
  grid-area: cash-flow;
  padding: 20px 40px;
}
</style>
