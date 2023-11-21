<template>
  <header class="header"></header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: hsl(199, 60%, 49%);
  box-shadow: 0px 4px 6px 0px hsl(200, 36%, 23%);
  position: relative;
  z-index: 1500;
  @media screen and (max-width: 760px) {
    display: none;
  }
}
</style>
