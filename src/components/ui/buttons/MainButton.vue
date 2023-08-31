<template>
  <button type="button" :class="` btn-type-${type}`" @click="handleClick">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ type: string; title: string; handleClick(): void }>()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/main-button.scss';
.btn-type-to-login {
  @include mainButton(#0e38a9, 600, rgb(31, 31, 199));
  width: 200px;
  box-shadow: 1px 1px 6px 2px rgb(57, 57, 190);
  transition: 0.5s;

  &:hover {
    box-shadow: 2px 2px 12px 5px rgb(57, 57, 190);
  }
}
.btn-type-to-registration {
  @include mainButton(hsl(243deg 67.66% 42.36%), 600, hsl(243, 76%, 40%));
  width: 200px;
  box-shadow: 1px 1px 6px 2px hsl(243, 76%, 40%);
  transition: 0.5s;

  &:hover {
    box-shadow: 2px 2px 12px 5px hsl(243, 76%, 40%);
  }
}
</style>
