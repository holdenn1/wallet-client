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
  value: string | undefined
  name: string
  label?: string
  placeholder?: string
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
.form-input {
  width: 100%;

  .label-input {
    display: block;
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin-bottom: 10px;
  }
  .input {
    padding: 10px 8px;
    width: 100%;
    margin-bottom: 10px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 0.5px solid rgb(78, 78, 78);

    &:focus {
      outline: none;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 1px solid rgb(0, 0, 0);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-background-clip: text;
      -webkit-text-fill-color: #000000;
      transition: background-color 5000s ease-in-out 0s;
      box-shadow: inset 0 0 20px 20px #ffffff29;
    }
  }
  .error {
    text-align: center;
    color: red;
  }
}
</style>
