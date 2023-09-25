<template>
  <div class="financial-control-widget-wrapper">
    <div class="type-operation">
      <MainButton type="money-operation" :handle-click="() => (operationType = 'income')"
        >Income</MainButton
      >
      <MainButton type="money-operation" :handle-click="() => (operationType = 'cost')"
        >Cost</MainButton
      >
      <MainButton type="money-operation" :handle-click="() => (operationType = 'transfer')"
        >Money transfer</MainButton
      >
    </div>
    <div class="operation">
      <div class="operation__type" style="width: 40px">

        <font-awesome-icon
          v-show="operationType === 'cost'"
          icon="minus"
          style="color: white"
          size="lg"
        />
        <font-awesome-icon
          v-show="operationType === 'income'"
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
    <div class="category">
      <MainButton type="money-category" :handle-click="() => console.log(4)">Account</MainButton>
      <MainButton type="money-category" :handle-click="() => console.log(4)">Category</MainButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainButton from 'ui/buttons/MainButton.vue'

import { ref } from 'vue'

const operationType = ref<'income' | 'cost' | 'transfer'>('cost')
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/input.scss';
.financial-control-widget-wrapper {
  grid-area: financial-control;
  background-color: hsl(199, 60%, 49%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  .type-operation {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .operation {
    border-top: 1px solid hsl(199, 76%, 34%);
    border-bottom: 1px solid hsl(199, 76%, 34%);
    width: 100%;
    height: 100px;
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 0 12px;

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
  .category {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
