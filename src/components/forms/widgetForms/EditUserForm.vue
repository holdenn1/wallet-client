<template>
  <form class="edit-user-form" @submit="onSubmit">
    <slot />
    <div class="edit-user-form__input-wrapper">
      <CustomFormInput
        :value="values.firstName"
        name="firstName"
        type="text"
        label="First name"
        placeholder="Input your first name"
      />
      <CustomFormInput
        :value="values.lastName"
        name="lastName"
        type="text"
        label="Last name"
        placeholder="Input your last name"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'

const { values, handleSubmit } = useForm({
  initialValues: {
    firstName: '',
    lastName: ''
  }
})

const onSubmit = handleSubmit((values, { resetForm }) => {
  console.log(values)
  resetForm()
})
</script>

<style lang="scss" scoped>
.edit-user-form {
  &__input-wrapper {
    padding: 10px;
  }
}
</style>
