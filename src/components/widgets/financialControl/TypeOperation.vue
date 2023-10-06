<template>
  <div class="type-operation">
    <router-link
      :to="{ name: 'categories', query: { type: 'income' } }"
      class="type-operation__money-operation"
      :class="{ 'type-operation_active': operationType === 'income' }"
      >Income</router-link
    >
    <router-link
      :to="{ name: 'categories', query: { type: 'cost' } }"
      class="type-operation__money-operation"
      :class="{ 'type-operation_active': operationType === 'cost' }"
      >Cost</router-link
    >
    <router-link
      :to="{ name: 'default-widgets', query: { type: 'transfer' } }"
      class="type-operation__money-operation"
      :class="{ 'type-operation_active': operationType === 'transfer' }"
      >Money transfer</router-link
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const queryParams = {
  cost: 'cost',
  income: 'income',
  transfer: 'transfer'
}

const operationType = computed(() => {
  if (route.query.type) {
    //@ts-ignore
    return queryParams[route.query.type]
  } else {
    return ''
  }
})
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
