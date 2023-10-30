<template>
  <form @submit="onSubmit">
    <slot />
    <div class="input-wrapper">
      <CustomSelect
        :options="['MonoBank', 'PrivatBank', 'OschadBank', '']"
        :default="'Select credit card'"
        @input="
          (option) => {
            bankName = option
            isSubmitForm = false
          }
        "
        :is-submit-form="isSubmitForm"
      />
    </div>
    <div class="input-wrapper">
      <CustomFormInput
        :value="values.balance"
        name="balance"
        type="number"
        label="Enter enter current balance"
        placeholder="Current balance"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import CustomSelect from 'ui/inputs/CustomSelect.vue'

import { AddCreditCardRequest } from '@/api/requests'
import { useUserStore } from '@/store/userStore'

import { ref } from 'vue'
import { AxiosError } from 'axios'
import { useForm } from 'vee-validate'
import { useToastify } from 'vue-toastify-3'

import type { AddCreditCardRequestType } from '@/store/types/userStoreTypes'

const bankName = ref()
const isSubmitForm = ref<boolean>(false)

const { values, handleSubmit } = useForm({
  initialValues: {
    balance: 0
  }
})

const { toastify } = useToastify()

const userStore = useUserStore()

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  try {
    if (!bankName.value) {
      toastify('warning', 'Select the bank name')
      return
    }
    if (values.balance < 100) {
      toastify('warning', 'Balance must be greater than 100')
      return
    }
    const { data }: AddCreditCardRequestType = await AddCreditCardRequest({
      balance: String(values.balance),
      bankName: bankName.value
    })
    if (!data) {
      throw new Error()
    }
    userStore.addUserCreditCard(data)

    bankName.value = null
    isSubmitForm.value = true
    resetForm()
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

<style scoped>
.input-wrapper {
  padding: 20px;
}
</style>
