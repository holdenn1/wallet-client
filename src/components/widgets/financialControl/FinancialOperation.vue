<template>
  <div class="operation">
    <div class="operation__content">
      <font-awesome-icon
        @click="$emit('open-setting-operation')"
        icon="gear"
        class="operation__setting"
        size="2xl"
      />
      <button type="submit">
        <font-awesome-icon icon="check" class="operation__confirm" size="2xl" />
      </button>
      <div v-show="categoryList !== 'transfer'" class="operation__type">
        <font-awesome-icon
          v-show="categoryList === 'cost'"
          icon="minus"
          style="color: white"
          size="lg"
        />
        <font-awesome-icon
          v-show="categoryList === 'income'"
          icon="plus"
          style="color: white"
          size="lg"
        />
      </div>
      <div class="operation-money-input-wrapper">
        <Field :name="'amount'" class="operation-money-input" type="number" />
      </div>
      <span class="operation__currency">UAH</span>
    </div>
    <div class="operation__category">
      <span> {{ categoryInfo }}</span>
    </div>
    <div class="operation-account">
      <button
        type="button"
        @click="$emit('open-select-payment-method')"
        class="operation-account__account-btn"
      >
        Select payment method
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import type { OperationTypes } from '@/components/forms/widgetForms/types';

defineProps<{
  categoryList: OperationTypes
}>()

defineEmits<{
  (e: 'open-setting-operation'): void
  (e: 'open-select-payment-method'): void
}>()

const route = useRoute()

const categoryInfo = computed(() => {
  if (route.query.category ?? route.query.category)
    return `Category - ${route.query.subcategory ?? route.query.category}`
  if (route.query.category ?? route.query.category)
    return `Category - ${route.query.subcategory ?? route.query.category}`
  if (route.query.category) return `Category - ${route.query.category}`
  return ''
})
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
    align-items: flex-end;

    padding: 0 60px 40px;
  }

  &__category {
    padding: 0 60px 10px;
    font-weight: 500;
    height: 36px;
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
../../forms/widgetForms/types