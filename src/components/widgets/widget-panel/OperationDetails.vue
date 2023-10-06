<template>
  <div class="operation-details">
    <WidgetPanelHeader header-title-text="Details">
      <button type="button" @click="() => console.log('confirm')">
        <font-awesome-icon icon="check" size="2xl" style="color: white" />
      </button>
    </WidgetPanelHeader>
    <div class="operation-details__content">
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
            <div style="position: relative; margin-bottom: 10px">
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
        <div style="position: relative; margin: 20px 0">
          <router-link class="operation-details-field__title" :to="{ name: 'select-account' }">
            Select account
          </router-link>
          <font-awesome-icon
            class="operation-details-field__icon"
            icon="arrow-right-long"
            size="xl"
          />
        </div>
      </div>

      <div class="operation-details-field">
        <div class="operation-details-input-wrapper">
          <label class="operation-details-input-wrapper__label" for="sum">
            Sum
            <input
              id="sum"
              v-model="sum"
              class="operation-details-input-wrapper__input"
              type="number"
            />
          </label>
        </div>
      </div>
      <div class="operation-details-field">
        <div class="operation-details-input-wrapper">
          <label class="operation-details-input-wrapper__label" for="date"
            >Date
            <input
              id="date"
              v-model="date"
              class="operation-details-input-wrapper__input"
              type="date"
            />
          </label>
        </div>
      </div>
      <div class="operation-details-field">
        <SettingOperationInput label="Recipient" placeholder="Recipient" v-model="recipient" />
      </div>
      <div class="operation-details-field">
        <SettingOperationInput
          label="Description"
          placeholder="Description"
          v-model="description"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import SettingOperationInput from 'ui/inputs/SettingOperationInput.vue'
import Accordion from 'ui/accordion/Accordion.vue'

import { ref } from 'vue'

const description = ref('')
const recipient = ref('')
const date = ref('')
const sum = ref('')
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/input.scss';
@import '@/styles/mixins/scrollbar.scss';
.operation-details {
  width: 100%;
  height: 100%;

  &__content {
    width: 100%;
    height: calc(100vh - 120px);
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    @include scrollbar(4px, rgb(48, 48, 48));
  }
  .operation-details-field {
    cursor: pointer;
    &__title {
      font-size: 18px;
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
    .operation-details-input-wrapper {
      flex: 1 1 auto;
      &__label {
        font-size: 18px;
        font-weight: 600;
      }
      &__input {
        @include input;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  }
}
</style>
