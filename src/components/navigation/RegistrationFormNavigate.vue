<template>
  <div class="registration-form-navigate">
    <MainButton v-if="hasPrevious" type="previous" :title="'Previous'" :handleClick="goToPrev" />
    <SubmitButton>{{ isLastStep ? 'Submit' : 'Next' }}</SubmitButton>
  </div>
</template>

<script setup lang="ts">
import MainButton from 'ui/buttons/MainButton.vue'
import SubmitButton from 'ui/buttons/SubmitButton.vue'
defineProps<{
  hasPrevious: boolean
  goToPrev(): void
  isLastStep: boolean
}>()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.registration-form-navigate {
  @include flexCenter;
  @media screen and (max-width: 440px) {
    flex-direction: column;
  }
}
</style>
