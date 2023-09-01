<template>
  <div>
    <button v-if="hasPrevious" type="button" @click="goToPrev">Previous</button>
    <button type="submit">{{ isLastStep ? 'Submit' : 'Next' }}</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hasPrevious: boolean
  goToPrev(): void
  isLastStep: boolean
}>()
</script>

<style scoped></style>
