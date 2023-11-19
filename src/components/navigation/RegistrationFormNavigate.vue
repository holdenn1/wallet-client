<template>
  <div class="registration-form-navigate">
    <CustomMainButton v-if="hasPrevious" type="previous" :handleClick="goToPrev">
      <font-awesome-icon icon="circle-arrow-left" style="margin-right: 10px" /> <span>Previous</span>
    </CustomMainButton>
    <SubmitButton :disabled="isSubmitting">
      <span style="margin-right: 10px">{{ navigation }}
        {{ isSubmitting && isLastStep ? 'Submitting...' : '' }}</span>
      <font-awesome-icon v-if="isLastStep" icon="right-to-bracket" />
      <font-awesome-icon v-else icon="circle-arrow-right" />
    </SubmitButton>
  </div>
</template>

<script setup lang="ts">
import SubmitButton from 'ui/buttons/SubmitButton.vue'
import { computed } from 'vue';
const props = defineProps<{
  hasPrevious: boolean
  goToPrev(): void
  isLastStep: boolean
  isSubmitting: boolean
}>()

const navigation = computed(() => {
  if(props.isSubmitting) return ''
  return props.isLastStep ? 'Submit' : 'Next'
})
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
