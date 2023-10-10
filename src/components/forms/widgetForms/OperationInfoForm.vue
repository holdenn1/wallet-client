<template>
  <form class="operation-info-form" @submit="onSubmit">
    <slot />
    <div class="operation-info-form__input-wrapper">
      <CustomFormInput
        :value="values.description"
        name="description"
        type="text"
        label="Description"
        placeholder="Description"
      />
      <CustomFormInput
        :value="values.recipient"
        name="recipient"
        type="text"
        label="Recipient"
        placeholder="Recipient"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'

const { values, handleSubmit } = useForm({
  initialValues: {
    description: '',
    recipient: ''
  }
})

const onSubmit = handleSubmit((values, { resetForm }) => {
  console.log(values)
  resetForm()
})
</script>

<style lang="scss" scoped>
.operation-info-form{
  &__input-wrapper{
    padding: 10px;
  }
}
</style>
