<template>
  <div class="form-input">
    <label class="label-input" v-if="label" :for="name">{{ label }}</label>
    <input
      class="input"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
    <p class="error" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps<{
  type: string
  value?: string
  name: string
  label?: string
  placeholder: string
}>()

const name = toRef(props, 'name')

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta
} = useField(name, undefined, {
  initialValue: props.value
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-col.scss';
.form-input {
  @include contentFlexColumn;
  .label-input {
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin-bottom: 10px;
  }
  .input {
    padding: 10px 8px;
    width: 220px;
    margin-bottom: 10px;
    border-radius: 12px;
    border: 1px solid black;
    &:focus {
      border: 1px solid black;
    }
  }
  .error {
    text-align: center;
    color: red;
  }
}
</style>
