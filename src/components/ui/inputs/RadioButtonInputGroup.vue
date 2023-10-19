<template>
  <div class="middle">
    <label>
      <Field :name="inputName" type="radio" :value="firstInputValue" :title="firstInputTitleText" />
      <div class="front-end box">
        <span>{{ firstInputText }}</span>
      </div>
    </label>
    <label>
      <Field :name="inputName" type="radio" :value="secondInputValue" :title="secondInputValue" />
      <div class="back-end box">
        <span>{{ secondInputText }}</span>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate'

defineProps<{
  inputName: string
  firstInputText: string
  secondInputText: string
  firstInputValue: string
  secondInputValue: string
  firstInputTitleText?: string
  secondInputTitleText?: string
}>()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr';

.middle {
  width: 280px;
  height: 60px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid hsl(199, 60%, 49%);
  display: flex;
  h1 {
    color: white;
  }
  input[type='radio'] {
    display: none;
    &:checked {
      + .box {
        background-color: hsl(199, 60%, 49%);
        span {
          color: white;
        }
      }
    }
  }
  .box {
    height: 100%;
    width: 140px;
    background-color: white;
    transition: 0.3s;
    will-change: transition;
    font-weight: 900;
    cursor: pointer;
    text-align: center;
    @include flexCenter;

    span {
      transition: all 300ms ease;
      user-select: none;
      color: hsl(199, 60%, 49%);

      &:before {
        font-size: 1.2em;
        display: block;
        transform: translateY(-80px);
        opacity: 0;
        transition: all 300ms ease-in-out;
        color: white;
      }
    }
  }
}
</style>
