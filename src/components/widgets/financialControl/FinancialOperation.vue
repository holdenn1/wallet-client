<template>
  <div class="operation">
    <div class="operation__content">
      <font-awesome-icon @click="$emit('open-setting-operation')"  icon="gear" class="operation__setting" size="2xl" />
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
    <div class="operation-account">
      <button type="button" @click="$emit('open-select-payment-method')" class="operation-account__account-btn">Select payment method</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

defineEmits<{
  (e: 'open-setting-operation'): void
  (e: 'open-select-payment-method'): void
}>()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/input.scss';
@import '@/styles/mixins/main-button.scss';
@import '@/styles/mixins/d-flex-ctr.scss';
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
    padding: 0 60px;
  }

  .operation-account {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__account-btn {
      @include mainButton(inherit, hsl(199, 64%, 42%));
      @include flexCenter;
      font-size: 20px;
      font-weight: 500;
      width: 100%;
      height: 60px;
      transition: 0.7s;
      margin: 0;
      border-radius: 0;
    }
  }
  &__confirm {
    position: absolute;
    top: 12px;
    left: 20px;
    cursor: pointer;
    @media screen and (max-width: 640px) {
      left: 34px;
    }
  }

  &__setting {
    position: absolute;
    top: 12px;
    right: 20px;
    cursor: pointer;
    @media screen and (max-width: 640px) {
      right: 34px;
    }
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
