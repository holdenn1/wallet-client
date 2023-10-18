<template>
  <form @submit="onSubmit">
    <slot name="header-form" />
    <WidgetPanelContentWrapper>
      <slot name="content-form" />

      <CustomFormInput
        :value="values.amount"
        name="amount"
        type="number"
        label="Enter the amount"
        placeholder="The amount"
      />

      <CustomFormInput
        :value="values.date"
        name="date"
        type="date"
        label="Enter the date"
        placeholder="The date"
      />

      <CustomFormInput
        :value="values.recipient"
        name="recipient"
        type="text"
        label="Enter the recipient"
        placeholder="The recipient"
      />

      <CustomFormInput
        :value="values.description"
        name="description"
        type="text"
        label="Enter the description"
        placeholder="The description"
      />
    </WidgetPanelContentWrapper>
  </form>
</template>

<script setup lang="ts">
import WidgetPanelContentWrapper from 'ui/wrappers/WidgetPanelContentWrapper.vue'
import { useForm } from 'vee-validate'

const { values, handleSubmit } = useForm({
  initialValues: {
    amount: '',
    date: '',
    recipient: '',
    description: ''
  }
})

const onSubmit = handleSubmit((values, { resetForm }) => {
  console.log(values)
  resetForm()
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/input.scss';
.operation-details-input-wrapper {
  flex: 1 1 auto;
  &__label {
    font-size: 16px;
    font-weight: 600;
  }
  &__input {
    @include input;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
</style>
