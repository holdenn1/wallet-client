<template>
  <div @click="() => (isMenu = false)" class="cash-flow-widget">
    
    <CashFlowBars income-color="#00c241" cost-color="#c20000" />
  </div>
</template>

<script setup lang="ts">
import CashFlowBars from 'ui/progressbar/CashFlowBars.vue'

import { ref } from 'vue'

const isMenu = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.cash-flow-widget {
  grid-area: cash-flow;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
