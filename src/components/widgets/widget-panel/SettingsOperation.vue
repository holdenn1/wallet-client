<template>
  <div class="operation-settings">
    <OperationInfoForm>
      <WidgetPanelHeader header-title-text="Operation settings">
        <button type="submit">
          <font-awesome-icon icon="check" size="2xl" style="color: white" />
        </button>
      </WidgetPanelHeader>
    </OperationInfoForm>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import OperationInfoForm from 'forms/widgetForms/OperationInfoForm.vue'
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