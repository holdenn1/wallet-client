<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="accordion-title" @click="toggleAccordion()">
    <slot name="title" />
  </div>

  <div class="accordion-content" v-show="isOpen">
    <slot name="content" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref<boolean>(false)

const toggleAccordion = () => {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
.accordion-title {
  margin-bottom: 12px;
}

.accordion-content {
  margin: 0 10px 12px 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(182, 182, 182);
}
</style>
