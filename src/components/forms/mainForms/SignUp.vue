<template>
  <form class="sign-up-form" @submit="onSubmit" v-if="!isShowEmailConfirmMessage">
    <ProgressForm :active-step="currentStepIdx + 1" />

    <FormStep>
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
      <CustomFormInput :value="values.birthday" name="birthday" type="date" label="Birthday" />
    </FormStep>

    <FormStep>
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

      <CustomFormInput
        :value="values.confirmPassword"
        name="confirmPassword"
        type="password"
        label="Confirm password"
        placeholder="Confirm your password"
      />
    </FormStep>

    <FormStep
      ><UploadAvatarStep
        @upload-avatar="(file) => (uploadedAvatar.photo = file)"
        :uploaded-avatar="uploadedAvatar"
    /></FormStep>

    <RegistrationFormNavigate
      :go-to-prev="goToPrev"
      :has-previous="hasPrevious"
      :is-last-step="isLastStep"
    />
  </form>
  <ConfirmEmailAddress v-if="isShowEmailConfirmMessage" :email="userStore.userState.user?.email" />
</template>

<script setup lang="ts">
import FormStep from './steps/FormStep.vue'
import ProgressForm from './ProgressForm.vue'
import UploadAvatarStep from './steps/UploadAvatarStep.vue'
import RegistrationFormNavigate from 'navigation/RegistrationFormNavigate.vue'
import ConfirmEmailAddress from 'components/notifications/ConfirmEmailAddress.vue'

import validationSchema from '@/utils/validate/registrationValidateSchema'
import { useUserStore } from '@/store/userStore'

import { ref, computed, provide } from 'vue'
import { useToastify } from 'vue-toastify-3'
import { useForm } from 'vee-validate'

import { type InitialValuesSignUpForm, type RegistrationData } from './types'

const userStore = useUserStore()
const { toastify } = useToastify()

const currentStepIdx = ref(0)
const stepCounter = ref(0)
const uploadedAvatar = ref<{ photo: File | null }>({ photo: null })
const isShowEmailConfirmMessage = ref<boolean>(false)

provide('STEP_COUNTER', stepCounter)
provide('CURRENT_STEP_INDEX', currentStepIdx)

const currentSchema = computed(() => {
  return validationSchema[currentStepIdx.value]
})

const { values, handleSubmit } = useForm<InitialValuesSignUpForm>({
  validationSchema: currentSchema,
  keepValuesOnUnmount: true
})

const isLastStep = computed(() => {
  return currentStepIdx.value === stepCounter.value - 1
})

const hasPrevious = computed(() => {
  return currentStepIdx.value > 0
})

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  if (!isLastStep.value) {
    currentStepIdx.value++
    return
  }

  if (uploadedAvatar.value.photo) {
    const { confirmPassword, ...data }: RegistrationData = {
      ...values,
      photo: uploadedAvatar.value.photo
    }
    await userStore.registrationUser({
      data,
      currentStepIdx,
      uploadedAvatar,
      isShowEmailConfirmMessage,
      resetForm
    })
  } else {
    toastify('warning', 'Avatar is required field')
  }
})

function goToPrev() {
  if (currentStepIdx.value === 0) {
    return
  }

  currentStepIdx.value--
}
</script>

<style lang="scss" scoped>
.sign-up-form {
  width: 720px;
  max-height: 380px;
  margin: 0 20px;
}
</style>
