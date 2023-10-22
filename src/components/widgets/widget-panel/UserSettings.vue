<template>
  <div class="user-settings">
    <EditUserForm>
      <WidgetPanelHeader header-title-text="Add thr credit card">
        <template #return>
          <button type="button" @click="() => router.go(-1)" class="widget-panel-header__link">
            <font-awesome-icon
              icon="circle-arrow-left"
              size="2xl"
              class="widget-panel-header__icon"
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
    <div class="user-settings__buttons">
      <MainButton :handle-click="() => console.log(1)" type="delete-an-account"
        >Delete the account</MainButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import EditUserForm from 'forms/widgetForms/EditUserForm.vue'
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import MainButton from 'ui/buttons/MainButton.vue'

import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr';
.user-settings {
  &__buttons {
    width: 100%;
    height: calc(100vh - 300px);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 40px;
  }
}
</style>
