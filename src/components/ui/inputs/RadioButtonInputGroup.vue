<template>
  <div class="middle">
    <label>
      <input type="radio" name="radio" checked />
      <div class="front-end box">
        <span>Front-end</span>
      </div>
    </label>

    <label>
      <input type="radio" name="radio" />
      <div class="back-end box">
        <span>Back-end</span>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr';

.middle {
  width: 300px;
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
    width: 150px;
    background-color: white;
    transition: 0.3s;
    will-change: transition;
    font-weight: 900;
    cursor: pointer;
    @include flexCenter;
    &:active {
      transform: translateY(10px);
    }
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
