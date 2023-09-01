<template>
  <button type="button" :class="` btn-type-${type}`" @click="handleClick">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ type: string; title: string; handleClick(): void }>()
</script>

<style lang="scss" scoped></style>
