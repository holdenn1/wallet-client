<template>
  <div class="operation">
    <div class="operation__content">
      <font-awesome-icon icon="check" class="operation__confirm" size="2xl" />
      <div v-show="route.query.type !== 'transfer'" class="operation__type">
        <font-awesome-icon
          v-show="route.query.type === 'cost'"
          icon="minus"
          style="color: white"
          size="lg"
        />
        <font-awesome-icon
          v-show="route.query.type === 'income'"
          icon="plus"
          style="color: white"
          size="lg"
        />
      </div>
      <div class="operation-money-input-wrapper">
        <input class="operation-money-input" type="number" />
      </div>
      <span class="operation__currency">UAH</span>
    </div>
    <div class="operation__categories">
      <FinancialCategories />
    </div>
  </div>
</template>

<script setup lang="ts">
import FinancialCategories from './FinancialCategories.vue'

import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/input.scss';
.operation {
  border-top: 1px solid hsl(199, 76%, 34%);
  border-bottom: 1px solid hsl(199, 76%, 34%);
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  position: relative;
  flex: 1 1 auto;

  &__content {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    padding: 0 12px;
  }

  &__confirm {
    position: absolute;
    top: 12px;
    right: 20px;
    cursor: pointer;
  }

  &__currency {
    font-size: 22px;
    font-weight: 500;
  }
  .operation-money-input-wrapper {
    flex: 1 1 auto;
    margin: 0 20px;
    .operation-money-input {
      @include input;
      border-bottom: 1px solid white;
      color: white;
      font-size: 34px;
      &:focus {
        border-bottom: 1px solid white;
      }
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
}
</style>
