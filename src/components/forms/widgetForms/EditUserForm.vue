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
import validationSchema from '@/utils/validate/updateUserDataValidateSchema'
import { updateUserDateRequest } from '@/api/requests'
import { AxiosError } from 'axios'
import { useToastify } from 'vue-toastify-3'
import type { User } from '@/store/types/userStoreTypes'
import { useUserStore } from '@/store/userStore'

const { toastify } = useToastify()

const userStore = useUserStore()

const { values, handleSubmit } = useForm({
  initialValues: {
    firstName: '',
    lastName: ''
  },
  validationSchema
})

const onSubmit = handleSubmit(async ({ firstName, lastName }, { resetForm }) => {
  try {
    const { data }: { data: User } = await updateUserDateRequest({ firstName, lastName })

    if (!data) {
      throw new Error()
    }

    userStore.setUser(data)
  } catch (e) {
    if (e instanceof AxiosError) {
      toastify('error', e.response?.data?.message || 'An error occurred')
      console.error(e)
    } else {
      console.error(e)
    }
  }

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
