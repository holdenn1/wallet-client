<template>
  <div class="cash-flow">
    <div class="cash-flow__income-progress-line-wrapper">
      <div class="cash-flow__progressbar-title">
        <span>Income</span>
        <span :style="{ color: incomeColor }"> + 1000 uah</span>
      </div>
      <ProgressLine :bgcolor="incomeColor" :completed="75" />
    </div>
    <div class="cash-flow__costs-progress-line-wrapper">
      <div class="cash-flow__progressbar-title">
        <span>Costs</span>
        <span :style="{ color: costColor }"> - 20 uah</span>
      </div>
      <ProgressLine :bgcolor="costColor" :completed="40" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressLine from './ProgressLine.vue'

defineProps<{ incomeColor: string; costColor: string }>()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-js-sb-al-ctr.scss';

.cash-flow {
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  overflow: hidden;
  width: 100%;

  &__progressbar-title {
    @include flex-js-sb-al-ctr;
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
</style>
