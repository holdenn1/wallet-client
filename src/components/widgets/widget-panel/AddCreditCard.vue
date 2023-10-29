<template>
  <div class="add-credit-card">
    <CreditCartForm>
      <WidgetPanelHeader header-title-text="Add the credit card">
        <template #return>
          <button type="button" @click="() => router.go(-1)" class="widget-panel-header__link">
            <font-awesome-icon
              icon="circle-arrow-left"
              size="2xl"
              class="widget-panel-header__icon"
              style="color: white"
            />
          </button>
        </template>
        <template #confirm>
          <button type="submit">
            <font-awesome-icon icon="check" size="2xl" style="color: white" />
          </button>
        </template>
      </WidgetPanelHeader>
    </CreditCartForm>
  </div>
</template>

<script setup lang="ts">
import CreditCartForm from 'forms/widgetForms/CreditCartForm.vue'
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped></style>
