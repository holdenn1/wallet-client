<template>
  <form class="sign-in-form" @submit="onSubmit">
    <CustomFormInput
      :value="values.email"
      name="email"
      type="email"
      label="Email"
      placeholder="Input your email"
    />
    <CustomFormInput
      :value="values.password"
      name="password"
      type="password"
      label="Password"
      placeholder="Input your password"
    />
    <div class="submit-btn-wrapper">
      <SubmitButton>
        <span>Submit</span>
        <font-awesome-icon icon="right-to-bracket" style="margin-left: 10px" />
      </SubmitButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import CustomFormInput from 'ui/inputs/CustomFormInput.vue'
import SubmitButton from 'ui/buttons/SubmitButton.vue'

import validationSchema from '@/utils/validate/authValidateSchema'
import { useUserStore } from '@/store/userStore'

import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'

import type { InitialValuesSignInForm } from './types'

const userStore = useUserStore()
const router = useRouter()

const { values, handleSubmit } = useForm<InitialValuesSignInForm>({
  validationSchema
})

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  await userStore.loginUser(values)
  if (userStore.userState.user?.isEmailConfirmed) {
    router.push({ name: 'wallet' })
    resetForm()
  }
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
