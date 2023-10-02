<template>
  <div class="registration-form-navigate">
    <CustomMainButton v-if="hasPrevious" type="previous" :handleClick="goToPrev">
      <font-awesome-icon icon="circle-arrow-left" style="margin-right: 10px" /> <span>Previous</span>
    </CustomMainButton>
    <SubmitButton>
      <span style="margin-right: 10px">{{ isLastStep ? 'Submit' : 'Next' }}</span>
      <font-awesome-icon v-if="isLastStep" icon="right-to-bracket" />
      <font-awesome-icon v-else icon="circle-arrow-right" />
    </SubmitButton>
  </div>
</template>

<script setup lang="ts">
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
