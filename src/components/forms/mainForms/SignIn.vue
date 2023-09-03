<template>
  <form class="sign-in-form" @submit="onSubmit">
    <CustomFormInput :value="values.email" name="email" type="email" label="Email" placeholder="Input your email" />
    <CustomFormInput
      :value="values.password"
      name="password"
      type="password"
      label="Password"
      placeholder="Input your password"
    />
    <div class="submit-btn-wrapper">
      <SubmitButton>Submit</SubmitButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import CustomFormInput from 'ui/inputs/CustomFormInput.vue'
import SubmitButton from 'ui/buttons/SubmitButton.vue'

import { useForm } from 'vee-validate'
import validationSchema from '@/utils/validate/authValidateSchema'

const { values, handleSubmit } = useForm({
  validationSchema
})

const onSubmit = handleSubmit((values, { resetForm }) => {
  console.log(values)

  resetForm()
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.sign-in-form {
  width: 720px;
  max-height: 380px;
  margin: 0 20px;
  .submit-btn-wrapper {
    @include flexCenter;
  }
}
</style>
