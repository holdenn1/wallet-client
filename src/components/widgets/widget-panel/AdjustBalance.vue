<template>
  <div class="adjust-balance">
    <WidgetPanelHeader header-title-text="Adjust the balance" >
      <button type="button" @click="() => console.log('confirm')">
        <font-awesome-icon icon="check" size="2xl" style="color: white" />
      </button>
    </WidgetPanelHeader>
    <WidgetPanelContentWrapper>
      <h4 class="adjust-balance__title">Select the correction method</h4>
      <Accordion>
        <template v-slot:title
          ><h5 class="adjust-balance__input-title">Correct the balance</h5></template
        >
        <template v-slot:content>
          <SettingOperationInput
            label="Correct the balance"
            input-type="number"
            :model-value="correctBalance"
            placeholder="Input correct balance"
          />
        </template>
      </Accordion>
      <Accordion>
        <template v-slot:title
          ><h5 class="adjust-balance__input-title">Set a new balance</h5></template
        >
        <template v-slot:content>
          <SettingOperationInput
            label="Correct the balance"
            input-type="number"
            :model-value="changeBalance"
            placeholder="Input the new balance"
          />
        </template>
      </Accordion>
    </WidgetPanelContentWrapper>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import WidgetPanelContentWrapper from 'ui/wrappers/WidgetPanelContentWrapper.vue'
import SettingOperationInput from 'ui/inputs/SettingOperationInput.vue'
import Accordion from 'ui/accordion/Accordion.vue'

import { ref } from 'vue'

const correctBalance = ref('')
const changeBalance = ref('')
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
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
