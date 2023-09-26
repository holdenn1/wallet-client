<template>
 
    <div class="progressbar-line">
      <div
        class="progressbar-line__filler"
        :style="`width: ${completed}%; background-color: ${bgcolor}`"
      >
        <span class="progressbar-line__label"></span>
      </div>
    </div>
  
</template>

<script setup lang="ts">
defineProps<{
  completed: number
  bgcolor: string
}>()
</script>

<style lang="scss" scoped>
.progressbar-line {
  height: 20px;
  width: 100%;
  background-color: #cfcfcf;
  border-radius: 50px;

  &__filler {
    height: 100%;
    border-radius: inherit;
    text-align: right;
  }
  &__label {
    padding: 5px;
    color: white;
    font-weight: 500;
  }
}
</style>
