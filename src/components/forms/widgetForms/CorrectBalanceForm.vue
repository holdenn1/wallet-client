<template>
  <form @submit="onSubmit">
    <div>
      <h3>Select a correction method</h3>
      <RadioButtonInput
        first-input-text="Correct by recording"
        second-input-text="Change the current balance"
        :first-input-title-text="''"
        :secondInputTitleText="''"
        :first-input-value="'If you forgot to enter multiple expenses, Wallet will create an adjustment entry for you'"
        :second-input-value="'If you have not entered data for a long time, Wallet will change the current balance of your account'"
        :input-name="''"
      />
    </div>
    <div>
      <h3>Select balance for correct</h3>
      <RadioButtonInput
        first-input-text="Credit card"
        second-input-text="Cash"
        :first-input-value="''"
        :second-input-value="''"
        :input-name="''"
      />
    </div>

    <CustomSelect
      :options="['Mono Bank', 'Privat Bank', ]"
      :default="'Select credit card'"
      @input="(option) => console.log(option)"
      
    />
    <div class="input-wrapper">
      <CustomFormInput
        :value="values.creditCardName"
        name="creditCardName"
        type="text"
        label="Enter the credit card name"
        placeholder="The credit card name"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'

import RadioButtonInput from 'ui/inputs/RadioButtonInputGroup.vue'
import CustomSelect from 'ui/inputs/CustomSelect.vue'

const { values, handleSubmit } = useForm({
  initialValues: {
    creditCardName: ''
  }
})

const onSubmit = handleSubmit((values, { resetForm }) => {
  console.log(values)
  resetForm()
})
</script>

<style scoped></style>
