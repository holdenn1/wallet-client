<template>
  <div class="operation-setting-input">
    <label class="operation-setting-input__label" for="description">
      {{label}}
      <input
        id="description"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="operation-setting-input__input"
        type="text"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string; label: string; placeholder: string }>()
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/input.scss';
.operation-setting-input {
  &__input-wrapper {
    margin-bottom: 24px;
  }
  &__label {
    font-size: 18px;
    font-weight: 600;
  }
  &__input {
    @include input;
  }
}
</style>
