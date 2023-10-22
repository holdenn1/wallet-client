<template>
  <div class="operation-settings">
    <OperationInfoForm>
      <WidgetPanelHeader header-title-text="Operation settings" :is-navigate-back="true">
        <template #return>
          <button type="button" @click="$emit('close-setting-operation-menu')">
            <font-awesome-icon icon="circle-arrow-left" size="2xl" style="color: white" />
          </button>
        </template>
      </WidgetPanelHeader>
    </OperationInfoForm>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import OperationInfoForm from 'forms/widgetForms/OperationInfoForm.vue'

defineEmits<{
  (e: 'close-setting-operation-menu'): void
}>()
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
