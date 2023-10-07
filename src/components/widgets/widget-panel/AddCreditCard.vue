<template>
  <div class="add-credit-card">
    <CreditCartForm>
      <WidgetPanelHeader header-title-text="Add thr credit card">
        <button type="submit">
          <font-awesome-icon icon="check" size="2xl" style="color: white" />
        </button>
      </WidgetPanelHeader>
    </CreditCartForm>
  </div>
</template>

<script setup lang="ts">
import CreditCartForm from 'forms/widgetForms/CreditCartForm.vue'
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
</script>

<style lang="scss" scoped></style>
