<template>
  <div class="dynamic-widget-panel-wrapper">
    <router-view/>
  </div>
</template>

<script setup lang="ts">

import { RouterLink, useLink } from 'vue-router'
import {onMounted} from 'vue'

const {route} = useLink({
  // @ts-ignore
  ...RouterLink.props,
    inactiveClass: String,
})



onMounted(() => {
  console.log(route.value);
})
</script>

<style lang="scss" scoped>
.dynamic-widget-panel-wrapper{
  grid-area: dynamic-widget-panel;
}
</style>