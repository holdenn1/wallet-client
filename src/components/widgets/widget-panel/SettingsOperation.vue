<template>
  <div class="operation-settings">
    <WidgetPanelHeader header-title-text="Operation settings" />
    <div class="operation-setting-inputs">
      <SettingOperationInput
        input-type="text"
        label="Description"
        placeholder="Description"
        v-model="description"
      />
      <SettingOperationInput
        input-type="text"
        label="Recipient"
        placeholder="Recipient"
        v-model="recipient"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import SettingOperationInput from 'ui/inputs/SettingOperationInput.vue'

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
  }
}
</style>
