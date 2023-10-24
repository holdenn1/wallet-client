<template>
  <div class="type-operation">
    <button
      type="button"
      class="type-operation__money-operation"
      :class="{ 'type-operation_active': categoryList === 'income' }"
      @click="$emit('set-category-list', 'income')"
    >
      Income
    </button>
    <button
      type="button"
      class="type-operation__money-operation"
      :class="{ 'type-operation_active': categoryList === 'cost' }"
      @click="$emit('set-category-list', 'cost')"
    >
      Cost
    </button>
    <button
      type="button"
      class="type-operation__money-operation"
      :class="{ 'type-operation_active': categoryList === 'transfer' }"
      @click="$emit('set-category-list', 'transfer')"
    >
      Money transfer
    </button>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import type { OperationTypes } from './types';

defineEmits<{ (e: 'set-category-list', data: OperationTypes): void }>()

const props = defineProps<{ categoryList: OperationTypes }>()

const { categoryList } = toRefs(props)
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/main-button.scss';
@import '@/styles/mixins/d-flex-ctr.scss';

.type-operation {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &__money-operation {
    text-align: center;
    @include mainButton(inherit, hsl(199, 68%, 41%));

    @include flexCenter;
    font-size: 20px;
    font-weight: 500;
    width: 100%;
    height: 60px;
    transition: 0.7s;
    margin: 0;
    border-radius: 0;
    padding: 0 6px;
  }
  &_active {
    background-color: hsl(199, 72%, 36%);
  }
}
</style>
