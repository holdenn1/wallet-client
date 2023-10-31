<template>
  <div class="user-settings">
    <EditUserForm>
      <WidgetPanelHeader header-title-text="Settings">
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
    </EditUserForm>
  </div>
</template>

<script setup lang="ts">
import EditUserForm from 'forms/widgetForms/EditUserForm.vue'
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'

import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped></style>
