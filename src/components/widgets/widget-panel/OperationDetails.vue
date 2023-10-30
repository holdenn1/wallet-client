<template>
  <div class="operation-details">
    <UpdateOperationForm>
      <template #header-form>
        <WidgetPanelHeader header-title-text="Details">
          <template #return>
            <button
              type="button"
              @click="() => router.replace({ name: 'default-widgets' })"
              class="widget-panel-header__link"
            >
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
      </template>
      <template #content-form>
        <div class="details-wrapper">
          <h3 class="operation-details__group-title">Basic settings</h3>
          <div class="operation-details-field">
            <Accordion>
              <template v-slot:title>
                <h4 class="operation-details-field__title-group">Current category -</h4>
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
                  <Accordion>
                    <template #title>Cost</template>
                    <template #content>
                      <CategoriesList :category="categoryStore.categoryState.cost" />
                    </template>
                  </Accordion>
                  <font-awesome-icon
                    class="operation-details-field__icon"
                    icon="arrow-right-long"
                    size="xl"
                  />
                </div>
                <div style="position: relative">
                  <Accordion>
                    <template #title>Income</template>
                    <template #content>
                      <CategoriesList :category="categoryStore.categoryState.income" />
                    </template>
                  </Accordion>
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
            <Accordion>
              <template #title>
                <h4 class="operation-details-field__title-group">Current method -</h4>
                <h4 class="operation-details-field__title">
                  Select payment method
                  <font-awesome-icon
                    class="operation-details-field__icon"
                    icon="arrow-right-long"
                    size="xl"
                  />
                </h4>
              </template>
              <template #content>
                <WidgetBalanceItem
                  :balance="{
                    bankIcon: 'fa-sack-dollar',
                    bankBackgroundColor: 'background-color: rgb(8 217 0);',
                    bankName: 'Cash',
                    balance: String(userStore.userState.user?.cash)
                  }"
                />
                <WidgetBalanceItem
                  v-for="creditCard in userStore.userState.user?.creditCard"
                  :key="creditCard.id"
                  :balance="{
                    balance: String(creditCard.balance),
                    bankBackgroundColor: creditCard.bankBackgroundColor,
                    bankIcon: creditCard.bankIcon,
                    bankName: creditCard.bankName
                  }"
                />
              </template>
            </Accordion>
          </div>
          <h3 class="operation-details__group-title" style="margin-top: 20px">
            Additional settings
          </h3>
        </div>
      </template>
    </UpdateOperationForm>
  </div>
</template>

<script setup lang="ts">
import CategoriesList from 'components/lists/CategoriesList.vue'
import WidgetBalanceItem from 'components/items/WidgetBalanceItem.vue'
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import UpdateOperationForm from 'forms/widgetForms/UpdateOperationForm.vue'
import Accordion from 'ui/accordion/Accordion.vue'

import { useCategoryStore } from '@/store/categoryStore'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore'

const categoryStore = useCategoryStore()
const router = useRouter()

const userStore = useUserStore()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/input.scss';
@import '@/styles/mixins/scrollbar.scss';
.operation-details {
  width: 100%;
  height: 100%;

  &__group-title {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .details-wrapper {
    .operation-details-field {
      cursor: pointer;
      position: relative;

      &__category {
        position: relative;
        margin-bottom: 10px;
      }
      &__title {
        display: block;
        font-size: 16px;
        position: relative;
        margin-bottom: 10px;
        font-weight: 600;
        color: hsl(199, 73%, 28%);
      }
      &__title-group {
        display: block;
        font-size: 18px;
        position: relative;
        font-weight: 500;
        margin-bottom: 10px;
      }
      &__icon {
        color: #5a5a5a;
        position: absolute;
        top: 0;
        right: 0;
        @media screen and (max-width: 960px) {
          right: 32px;
        }
      }
    }
  }
}
</style>
