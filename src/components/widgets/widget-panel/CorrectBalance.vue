<template>
  <div class="adjust-balance">
    

      <!--      <h4 class="adjust-balance__title">Select the correction method</h4>-->
      <CorrectBalanceForm >
        <WidgetPanelHeader header-title-text="Correct the balance">
          <button type="submit" >
            <font-awesome-icon icon="check" size="2xl" style="color: white" />
          </button>
        </WidgetPanelHeader>

      </CorrectBalanceForm>

  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import CorrectBalanceForm from 'forms/widgetForms/CorrectBalanceForm.vue'


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
