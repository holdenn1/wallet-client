<template>
  <div class="cash-flow-widget-wrapper">
    <h3 class="widget-title">Recent entries</h3>
    <p class="widget-description">The last 30 days</p>

    <div class="cash-flow">
      <div class="cash-flow__income-progress-line-wrapper">
        <div class="cash-flow__progressbar-title">
          <span>Income</span>
          <span style="color: #00c241"> + 1000 uah</span>
        </div>
        <ProgressLine bgcolor="#00c241" :completed="75" />
      </div>

      <div class="cash-flow__costs-progress-line-wrapper">
        <div class="cash-flow__progressbar-title">
          <span>Costs</span>
          <span style="color: #c20000"> - 20 uah</span>
        </div>
        <ProgressLine bgcolor="#c20000" :completed="40" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressLine from 'ui/progressbar/ProgressLine.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/widgetTitle.scss';
.cash-flow-widget-wrapper {
  grid-area: cash-flow;
  padding: 20px;
  @include widgetTitle;
  .cash-flow {
    font-size: 14px;
    font-weight: 600;
    padding: 10px;
    overflow: hidden;

    &__progressbar-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__income-progress-line-wrapper {
      margin-bottom: 20px;
      span {
        display: block;
        margin-bottom: 12px;
      }
    }
    &__costs-progress-line-wrapper {
      span {
        display: block;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
