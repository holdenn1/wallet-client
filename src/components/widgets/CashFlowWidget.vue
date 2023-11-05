<template>
  <div class="cash-flow-widget">
    <div class="cash-flow-title">
      <h3 class="cash-flow-title__title">Recent entries</h3>
      <p class="cash-flow-title__description">PER MONTH</p>
    </div>
    <CashFlowBars />
  </div>
</template>

<script setup lang="ts">
import CashFlowBars from 'components/charts/CashFlowBars.vue'
</script>

<style lang="scss" scoped>
.cash-flow-widget {
  grid-area: cash-flow;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  .cash-flow-title {
    &__title {
      text-align: left;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    &__description {
      font-size: 14px;
      font-weight: 500;
      text-align: left;
      color: gray;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }
}
</style>
