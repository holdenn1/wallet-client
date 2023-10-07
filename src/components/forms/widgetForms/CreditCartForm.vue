<template>
  <form  @submit="onSubmit">
    
      <slot />
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
.input-wrapper {
  padding: 20px;
}
</style>
