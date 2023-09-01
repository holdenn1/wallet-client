<template>
  <div v-if="shouldShow">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import type { Ref } from 'vue'

const initialInx = ref(0)

const currentIdx = inject<Ref<number>>('STEP_COUNTER', initialInx).value++

const formStepIdx = inject<Ref<number>>('CURRENT_STEP_INDEX')

const shouldShow = computed(() => currentIdx === formStepIdx?.value)
</script>

<style scoped></style>
