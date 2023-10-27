<template>
  <form class="correct-balance-form" @submit="onSubmit">
    <slot />
    <WidgetPanelContentWrapper>
      <div class="radio-btn-wrapper">
        <h3 class="radio-btn-title">Select a correction method</h3>
        <RadioButtonInput
          first-input-text="Correct by recording"
          second-input-text="Change the current balance"
          first-input-title-text="If you forgot to enter multiple expenses, Wallet will create an adjustment entry for you"
          secondInputTitleText="If you have not entered data for a long time, Wallet will change the current balance of your account"
          first-input-value="correct"
          second-input-value="change"
          input-name="method"
        />
      </div>
      <div class="radio-btn-wrapper">
        <h3 class="radio-btn-title">Select balance for correct</h3>
        <RadioButtonInput
          first-input-text="Credit card"
          second-input-text="Cash"
          first-input-value="card"
          second-input-value="cash"
          input-name="balanceType"
        />
      </div>

      <div v-if="values.balanceType === 'card'" class="select-wrapper">
        <CustomSelect
          :options="['MonoBank', 'PrivatBank', 'OschadBank']"
          :default="'Select credit card'"
          @input="(option) => (bankName = option)"
        />
      </div>

      <div class="input-wrapper">
        <CustomFormInput
          :value="values.balance"
          name="balance"
          type="number"
          label="Enter enter current balance"
          placeholder="Current balance"
        />
      </div>
    </WidgetPanelContentWrapper>
  </form>
</template>

<script setup lang="ts">
import WidgetPanelContentWrapper from 'ui/wrappers/WidgetPanelContentWrapper.vue'
import RadioButtonInput from 'ui/inputs/RadioButtonInputGroup.vue'
import CustomSelect from 'ui/inputs/CustomSelect.vue'

import { useForm } from 'vee-validate'
import { ref } from 'vue'

const bankName = ref()

const { values, handleSubmit } = useForm({
  initialValues: {
    method: '',
    balanceType: '',
    balance: 0
  }
})

const onSubmit = handleSubmit((values, { resetForm }) => {
  console.log({ ...values, bankName: bankName.value })
  resetForm()
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.correct-balance-form {
  width: 100%;
  height: 100%;
  .radio-btn-wrapper {
    text-align: center;
    @include flexCenter;
    flex-direction: column;
    margin-bottom: 26px;
    .radio-btn-title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    }
  }
  .select-wrapper {
    margin-bottom: 26px;
  }
  .input-wrapper {
    margin-bottom: 20px;
  }
}
</style>
