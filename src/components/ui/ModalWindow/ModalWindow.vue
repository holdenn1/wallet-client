<template>
  <div class="window-wrapper" :class="{ 'modal-active': mainState.isModalVisible }">
    <div
      @click.stop
      class="window-content"
      :class="{ 'modal-content-active': mainState.isModalVisible }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/mainStore'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
const { mainState } = storeToRefs(mainStore)
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.window-wrapper {
  @include flexCenter;
  visibility: hidden;
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  transition-delay: 0.5s;

  .window-content {
    width: 50vw;
    height: 50vh;
    max-width: 720px;
    animation-name: hide-modal;
    animation-duration: 0.4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    overflow: hidden;
    @keyframes hide-modal {
      0% {
        transform: scale(1, 1);
      }

      95% {
        visibility: hidden;
      }

      100% {
        transform: scale(0, 0);
      }
    }
    @media screen and (max-width: 1024px) {
      margin: 20px;
      width: 31.875rem;
      height: 24.375rem;
    }
  }
}

.modal-active {
  transform: scale(1, 1);
  visibility: visible;
  pointer-events: all;
  transition-delay: 0s;

  .window-content {
    animation-name: show-modal;
    animation-duration: 0.4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    overflow: hidden;
    @keyframes show-modal {
      0% {
        transform: scale(0, 0);
      }

      100% {
        transform: scale(1, 1);
      }
    }
  }
}
</style>
