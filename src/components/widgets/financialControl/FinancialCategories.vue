<template>
  <div class="category">
    <router-link :to="{ name: '' }" class="category__money-category">Account</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/styles/mixins/main-button.scss';
@import '@/styles/mixins/d-flex-ctr.scss';
.category {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__money-category {
    @include mainButton(inherit, hsl(199, 64%, 42%));
    @include flexCenter;
    width: 100%;
    height: 60px;
    transition: 0.7s;
    margin: 0;
    border-radius: 0;
  }
}
</style>
