<template>
  <div class="subcategory-content-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.subcategory-content-wrapper {
  margin: 0 10px 12px 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(182, 182, 182);
}
</style>
