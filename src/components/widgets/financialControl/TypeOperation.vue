<template>
  <div class="type-operation">
    <router-link
      :to="{ name: 'categories', query: { type: 'income' } }"
      class="type-operation__money-operation"
      >Income</router-link
    >
    <router-link
      :to="{ name: 'categories', query: { type: 'cost' } }"
      class="type-operation__money-operation"
      >Cost</router-link
    >
    <router-link
      :to="{ name: 'categories', query: { type: 'transfer' } }"
      class="type-operation__money-operation"
      >Money transfer</router-link
    >
  </div>
</template>

<script setup lang="ts"></script>

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
    @include mainButton(inherit, hsl(199, 64%, 42%));
    @include flexCenter;
    width: 100%;
    height: 60px;
    transition: 0.7s;
    margin: 0;
    border-radius: 0;
    padding: 0 6px;
  }
}
</style>
