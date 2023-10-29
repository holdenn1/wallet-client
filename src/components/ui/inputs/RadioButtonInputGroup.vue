<template>
  <div class="middle">
    <label class="label line" :title="firstInputTitleText">
      <Field :name="inputName" type="radio" :value="firstInputValue"  />
      <div class="front-end box">
        <span>{{ firstInputText }}</span>
      </div>
    </label>
    <label class="label" :title="secondInputTitleText">
      <Field :name="inputName" type="radio" :value="secondInputValue"  />
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
  width: 100%;
  height: 60px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid hsl(199, 60%, 49%);
  display: flex;
  display: flex;
  justify-content: space-evenly;

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

  .label {
    display: block;
    width: 100%;
    height: 100%;
  }

  .line {
    border-right: 1px solid hsl(199, 60%, 49%);
  }
  .box {
    height: 100%;
    background-color: white;
    transition: 0.3s;
    will-change: transition;
    padding: 6px;
    cursor: pointer;
    text-align: center;
    @include flexCenter;
    transition: 0.7s;
    &:hover {
      background-color: hsl(199, 72%, 57%);
      span {
        color: white;
      }
    }

    span {
      transition: all 300ms ease;
      user-select: none;
      color: hsl(199, 60%, 49%);

      &:before {
        
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
