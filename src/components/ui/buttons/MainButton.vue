<template>
  <button type="button" :class="`btn-type-${type}`" @click="handleClick">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ type: string; title: string; handleClick(): void }>()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/main-button.scss';
.btn-type-previous {
  @include mainButton(#5293db, 500, #3a76b8);
}
</style>
