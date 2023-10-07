<template>
  <div class="operation-details">
    <UpdateOperationForm>
      <template #header-form>
        <WidgetPanelHeader header-title-text="Details">
          <button type="submit">
            <font-awesome-icon icon="check" size="2xl" style="color: white" />
          </button>
        </WidgetPanelHeader>
      </template>
      <template #content-form>
        <div class="operation-details-field">
          <Accordion>
            <template v-slot:title>
              <h4 class="operation-details-field__title">
                Categories
                <font-awesome-icon
                  class="operation-details-field__icon"
                  icon="rectangle-list"
                  size="xl"
                  style="color: #5a5a5a"
                />
              </h4>
            </template>

            <template v-slot:content>
              <div class="operation-details-field__category">
                <router-link
                  :to="{ name: 'categories', query: { type: 'cost' } }"
                  style="display: block"
                  >Cost</router-link
                >
                <font-awesome-icon
                  class="operation-details-field__icon"
                  icon="arrow-right-long"
                  size="xl"
                />
              </div>
              <div style="position: relative">
                <router-link
                  :to="{ name: 'categories', query: { type: 'income' } }"
                  style="display: block"
                  >Income</router-link
                >
                <font-awesome-icon
                  class="operation-details-field__icon"
                  icon="arrow-right-long"
                  size="xl"
                />
              </div>
            </template>
          </Accordion>
        </div>
        <div class="operation-details-field">
          <router-link class="operation-details-field__title" :to="{ name: 'select-account' }">
            Select account
          </router-link>
          <font-awesome-icon
            class="operation-details-field__icon"
            icon="arrow-right-long"
            size="xl"
          />
        </div>
      </template>
    </UpdateOperationForm>
  </div>
</template>

<script setup lang="ts">
import UpdateOperationForm from 'forms/widgetForms/UpdateOperationForm.vue'
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import Accordion from 'ui/accordion/Accordion.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/input.scss';
@import '@/styles/mixins/scrollbar.scss';
.operation-details {
  width: 100%;
  height: 100%;

  .operation-details-field {
    cursor: pointer;
    position: relative;
    margin: 10px 0;
    &__category {
      position: relative;
      margin-bottom: 10px;
    }
    &__title {
      display: block;
      font-size: 16px;
      font-weight: 600;
      position: relative;
      margin-bottom: 10px;
    }
    &__icon {
      color: #5a5a5a;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
