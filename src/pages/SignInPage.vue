<template>
  <div>
    sign-in
    <RouterLink :to="{ name: 'home' }">
      <MainButton title="Home" type="to-registration" :handle-click="() => console.log(2)" />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import MainButton from '@/components/UI/buttons/MainButton.vue'
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
