<template>
  <div class="progress">
    <div ref="progressBarRef" class="progress-bar" />
    <ul ref="stepsListRef" class="progress-num">
      <li class="step active-step">1</li>
      <li class="step">2</li>
      <li class="step">3</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, toRefs } from 'vue'
import type { VNodeRef } from 'vue'

const props = defineProps<{ activeStep: number }>()
const { activeStep } = toRefs(props)

const progressBarRef = ref<VNodeRef | undefined>(undefined)
const stepsListRef = ref<VNodeRef | undefined>(undefined)

watch(activeStep, () => {
  const steps = [...stepsListRef.value!.children]
  steps.forEach((step, i) => {
    if (i < activeStep.value) {
      step.classList.add('active-step')
    } else {
      step.classList.remove('active-step')
    }
  })

  progressBarRef.value!.style.width = ((activeStep.value - 1) / (steps.length - 1)) * 100 + '%'
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.progress {
  position: relative;
  .progress-bar {
    position: absolute;
    background: #2a75ca;
    height: 5px;
    width: 0%;
    max-width: 98%;
    top: 50%;
    left: 1%;
    transform: translateY(-50%);
    transition-duration: 0.5s;
    z-index: 2;
  }
  .progress-num {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:before {
      content: '';
      background-color: lightgray;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 5px;
      width: 90%;
      z-index: 1;
    }
    .step {
      border: 3px solid lightgray;
      border-radius: 100%;
      width: 35px;
      height: 35px;
      background-color: #fff;
      @include flexCenter;
      position: relative;
      z-index: 3;
    }
    .active-step {
      border-color: #2a75ca;
      background-color: #2a75ca;
      transition-delay: 0.2s;
      transition-duration: 0.3s;
      color: #fff;
      z-index: 3;
    }
  }
}
</style>
