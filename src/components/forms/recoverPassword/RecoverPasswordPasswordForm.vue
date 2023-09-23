<template>
  <form class="recover-password-form" @submit="onSubmit">
    <CustomFormInput
      :value="values.password"
      name="password"
      type="password"
      label="New Password"
      placeholder="Input your password"
    />

    <CustomFormInput
      :value="values.confirmPassword"
      name="confirmPassword"
      type="password"
      label="Confirm password"
      placeholder="Confirm your password"
    />
    <SubmitButton>Recover</SubmitButton>
  </form>
</template>

<script setup lang="ts">
import SubmitButton from 'ui/buttons/SubmitButton.vue'

import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { recoverUserPassword } from '@/api/requests'
import { useRoute, useRouter } from 'vue-router'
import { useToastify } from 'vue-toastify-3'
import { AxiosError } from 'axios'

const route = useRoute()
const router = useRouter()
const { toastify } = useToastify()

const { values, handleSubmit } = useForm({
  initialValues: { password: '', confirmPassword: '' },
  validationSchema: yup.object({
    password: yup
      .string()
      .required('Password is required field')
      .min(6, 'Password must contain at least six characters')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        'Password must contain a letter, a number and one special character'
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password must match')
      .required('Confirm password is required')
  })
})

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  try {
    if (typeof route.params.userId === 'string') {
      const data = await recoverUserPassword({
        userId: route.params.userId,
        password: values.password
      })

      if (data.status === 201) {
        resetForm()
        router.replace({ name: 'sign-in' })
      }
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      toastify('error', e.response?.data?.message || 'An error occurred')
      console.error(e)
    } else {
      console.error(e)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.recover-password-form {
  margin: 20px;
  width: 31.875rem;
  height: 24.375rem;
  @include flexCenter;
  flex-direction: column;
}
</style>
