<template>
  <div class="wallet-layout-wrapper">
    <UserSidebar />
    <CoastsWidget />
    <FinancialControlWidget />
    <CoastStructureWidget />
    <CashFlowWidget />
  </div>
</template>

<script setup lang="ts">
import CoastsWidget from 'components/widgets/CoastsWidget.vue'
import FinancialControlWidget from 'components/widgets/FinancialControlWidget.vue'
import CoastStructureWidget from 'components/widgets/CoastStructureWidget.vue'
import CashFlowWidget from 'components/widgets/CashFlowWidget.vue'
import UserSidebar from 'components/sidebars/UserSidebar.vue'
</script>

<style scoped></style>
