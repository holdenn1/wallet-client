<template>
  <div class="financial-control-widget">
    <TypeOperation />
    <FinancialOperation />
  </div>
</template>

<script setup lang="ts">
import TypeOperation from './TypeOperation.vue'
import FinancialOperation from './FinancialOperation.vue'

// import { computed } from 'vue'
// import { useRoute } from 'vue-router'

// const route = useRoute()

// const operations = {
//   cost: 'cost',
//   income: 'income',
//   transfer: 'transfer'
// }

// const operationType = computed(() => {
//   if (route.query.type) {
//     //@ts-ignore
//     return operations[route.query.type]
//   } else {
//     return ''
//   }
// })


</script>

<style lang="scss" scoped>
.financial-control-widget {
  grid-area: financial-control;
  background-color: hsl(199, 60%, 49%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}
</style>
