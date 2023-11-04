<template>
  <form @submit="onSubmit">
    <slot name="header-form" />

    <WidgetPanelContentWrapper>
      <div>
        <slot name="content-form" />
        <h4 class="form-title">Edit operation</h4>
        <CustomFormInput
          :value="values.amount"
          name="amount"
          type="number"
          label="Edit the amount"
          placeholder="The amount"
        />

    
        <CustomFormInput
          :value="values.recipient"
          name="recipient"
          type="text"
          label="Edit the recipient"
          placeholder="The recipient"
        />

        <CustomFormInput
          :value="values.description"
          name="description"
          type="text"
          label="Edit the description"
          placeholder="The description"
        />
      </div>
      <div class="delete-transaction-btn-wrapper">
        <button type="button" @click="deleteTransaction" class="delete-transaction-btn">
          Delete
        </button>
      </div>
    </WidgetPanelContentWrapper>
  </form>
</template>

<script setup lang="ts">
import { updateTransactionRequest, getUserRequest, deleteTransactionRequest } from '@/api/requests'
import WidgetPanelContentWrapper from 'ui/wrappers/WidgetPanelContentWrapper.vue'

import { useForm } from 'vee-validate'
import { useRoute, useRouter } from 'vue-router'
import { AxiosError } from 'axios'
import { useToastify } from 'vue-toastify-3'

import validationSchema from '@/utils/validate/updateTransactionValidateSchema'
import { useTransactionStore } from '@/store/transactionStore'

import type { UpdateTransactionResponse } from '@/store/types/transactionStoreTypes'
import type { User } from '@/store/types/userStoreTypes'
import type { UpdateTransactionFormData } from './types'

import { useUserStore } from '@/store/userStore'

const props = defineProps<UpdateTransactionFormData>()

const transactionStore = useTransactionStore()
const userStore = useUserStore()

const { toastify } = useToastify()

const { values, handleSubmit } = useForm({
  initialValues: {
    amount: props?.amount ?? 0,
    recipient: props?.recipient ?? '',
    description: props?.description ?? ''
  },
  validationSchema
})

const route = useRoute()
const router = useRouter()

const onSubmit = handleSubmit(async (values) => {
  try {
    const operationId = route.params.operationId

    if (operationId) {
      const amountValue = String(values.amount).replace(/[^0-9]/g, '')

      if (+amountValue === 0) {
        await deleteTransactionRequest(String(operationId))
        const userData: { data: User } = await getUserRequest()
        userStore.setUser(userData.data)
        transactionStore.deleteTransaction(+operationId)
        router.replace({ name: 'default-widgets' })
        return
      }
      const { data }: { data: UpdateTransactionResponse } = await updateTransactionRequest(
        operationId as string,
        {
          amount: String(amountValue),
          description: values.description,
          recipient: values.recipient
        }
      )

      if (!data) {
        throw new Error()
      }

      const { amount, createAt, description, recipient, id } = data

      transactionStore.updateTransaction({ amount, createAt, description, recipient, id })

      const userData: { data: User } = await getUserRequest()
      userStore.setUser(userData.data)
      router.replace({ name: 'default-widgets' })
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

const deleteTransaction = async () => {
  const operationId = route.params.operationId
  if (operationId) {
    await deleteTransactionRequest(String(operationId))
    transactionStore.deleteTransaction(+operationId)

    const userData: { data: User } = await getUserRequest()
    userStore.setUser(userData.data)
    router.replace({ name: 'default-widgets' })
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/input.scss';
@import '@/styles/mixins/main-button.scss';
.form-title {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 14px;
  text-align: left;
}

.delete-transaction-btn-wrapper {
  width: 100%;
  height: calc(100vh - 420px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .delete-transaction-btn {
    @include mainButton(rgb(203, 35, 32), rgb(243, 19, 19));
  }
}
</style>
