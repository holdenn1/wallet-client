<template>
  <form class="recover-password-email-form" @submit="onSubmit" v-if="!isSentLink">
    <h3 class="recover-password-title-text">
      Enter your email and we'll send you a password reset link
    </h3>
    <CustomFormInput
      :value="values.email"
      name="email"
      type="email"
      label="Email"
      placeholder="Input your email"
    />
    <SubmitButton>Recover</SubmitButton>
  </form>
  <RecoverPasswordNotice v-else :email="email" @close-modal="closeModal" />
</template>

<script setup lang="ts">
import SubmitButton from 'ui/buttons/SubmitButton.vue'
import RecoverPasswordNotice from 'components/notifications/RecoverPasswordNotice.vue'

import { sendMessageForRecoverPassword } from '@/api/requests'

import * as yup from 'yup'
import { ref, nextTick } from 'vue'
import { useForm } from 'vee-validate'
import { useToastify } from 'vue-toastify-3'
import { AxiosError } from 'axios'

const isSentLink = ref(false)
const email = ref('')

const { toastify } = useToastify()

const { values, handleSubmit } = useForm({
  initialValues: { email: '' },
  validationSchema: yup.object({
    email: yup.string().required('Email is required field').email('Invalid email address')
  })
})

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  try {
    email.value = values.email
    await sendMessageForRecoverPassword({ email: values.email })
    resetForm()
    isSentLink.value = true
  } catch (e) {
    if (e instanceof AxiosError) {
      toastify('error', e.response?.data?.message || 'An error occurred')
      console.error(e)
    } else {
      console.error(e)
    }
  }
})

const closeModal = async () => {
  await nextTick()
  setTimeout(() => {
    isSentLink.value = false
  }, 400)
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';

.recover-password-email-form {
  width: 100%;
  height: 100%;
  background-color: rgb(241, 235, 235);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  .recover-password-title-text {
    font-size: 22px;
    text-align: center;
    font-weight: 500;
  }
}
</style>
