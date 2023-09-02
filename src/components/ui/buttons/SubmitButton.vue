<template>
  <button type="submit" class="btn-submit">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/styles/mixins/main-button.scss';
.btn-submit {
  @include mainButton(#3939bd, 500, #262690);
}
</style>
