<template>
  <div class="btn-wrap">
    <button type="button" @click="handleClick"><slot /></button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ handleClick(): void }>()
</script>

<style lang="scss" scoped>
.btn-wrap {
  background-color: #1a1a1a;
  display: inline-block;
  color: #fff;
  transform-style: preserve-3d;
  padding: 8px 40px;
  border: 1px solid #000;
  border-radius: 10px 10px 0 0;
  transform: rotate(270deg) perspective(200px) rotateX(35deg) translateZ(25px) translateY(5px);
  -webkit-backface-visibility: hidden;
  transition: all 0.5s ease-out;
  button {
    font-size: 12px;
    letter-spacing: 3px;
    display: block;
    transform: perspective(160px) rotateX(-18deg) translateZ(2px) translateY(2px);
  }
}
</style>
