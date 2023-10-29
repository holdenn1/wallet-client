<template>
  <div class="adjust-balance">
    <!--      <h4 class="adjust-balance__title">Select the correction method</h4>-->
    <CorrectBalanceForm>
      <WidgetPanelHeader header-title-text="Correct the balance">
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
    </CorrectBalanceForm>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import CorrectBalanceForm from 'forms/widgetForms/CorrectBalanceForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
.adjust-balance {
  width: 100%;
  height: 100%;
  &__title {
    font-size: 20px;
    font-weight: 600;
    color: rgb(39, 39, 39);
    margin-bottom: 30px;
  }
  &__input-title {
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
