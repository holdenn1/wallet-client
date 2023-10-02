<template>
  <button type="button" :class="`btn-type-${type}`" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ type: string; handleClick(): void }>()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/main-button.scss';
.btn-type-previous {
  @include mainButton(#5293db, #3a76b8);
}
.btn-type-button {
  @include mainButton(#1660b4, #3a76b8);
}

.btn-type-money-operation{
  @include mainButton(inherit, hsl(199, 64%, 42%));
  width: 100%;
  height: 60px;
  transition: 0.7s;
  margin: 0;
  border-radius: 0;
}


</style>
