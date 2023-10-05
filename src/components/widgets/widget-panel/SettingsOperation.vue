<template>
  <div class="operation-settings">
    <WidgetPanelHeader header-title-text="Operation settings" />
    <div class="operation-setting-inputs">
      <div class="operation-setting-inputs__input-wrapper">
        <label class="operation-setting-inputs__label" for="description">
          Description
          <input
            id="description"
            v-model.trim="description"
            class="operation-setting-inputs__input"
            type="text"
            placeholder="Operation description"
          />
        </label>
      </div>
      <div class="operation-setting-inputs__input-wrapper">
        <label class="operation-setting-inputs__label" for="recipient">
          Recipient
          <input
            id="recipient"
            v-model.trim="recipient"
            class="operation-setting-inputs__input"
            type="text"
            placeholder="Recipient"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'

import { ref } from 'vue'

const description = ref('')
const recipient = ref('')
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/input.scss';

.operation-settings {
  width: 100%;
  height: 100%;
  .operation-setting-inputs {
    padding: 20px;
    &__input-wrapper {
      margin-bottom: 24px;
    }
    &__label {
      font-size: 18px;
      font-weight: 600;
    }
    &__input {
      @include input;
    }
  }
}
</style>
