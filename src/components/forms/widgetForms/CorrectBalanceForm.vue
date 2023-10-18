<template>
  <form  @submit="onSubmit">
    <RadioButtonInput/>
<!--    <Accordion>
      <template #title><h5 class="adjust-balance__input-title">Correct the balance</h5></template>
      <template #content
      ><SettingOperationInput
          label="Correct the balance"
          input-type="number"
          :model-value="correctBalance"
          placeholder="Input correct balance"
      /></template>
    </Accordion>
    <Accordion>
      <template #title><h5 class="adjust-balance__input-title">Set a new balance</h5></template>
      <template #content>
        <SettingOperationInput
            label="Correct the balance"
            input-type="number"
            :model-value="changeBalance"
            placeholder="Input the new balance"
        />
      </template>
    </Accordion>-->
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import Accordion from "ui/accordion/Accordion.vue";
import SettingOperationInput from "ui/inputs/SettingOperationInput.vue";
import RadioButtonInput from "ui/inputs/RadioButtonInputGroup.vue";

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

<style scoped>

</style>