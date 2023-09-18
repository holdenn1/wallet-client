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

<style lang="scss" scoped>
.wallet-layout-wrapper {
  margin-top: 60px;
  width: 100%;
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: minmax(310px, 1fr) minmax(310px, 1fr) minmax(260px, 320px);
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'financial-control costs user-sidebar'
    'financial-control costs user-sidebar'
    'financial-control costs user-sidebar'
    'cost-structure costs user-sidebar'
    'cost-structure cash-flow user-sidebar'
    'cost-structure cash-flow user-sidebar';
}
</style>

<!-- .wallet-layout-wrapper {
  margin-top: 60px;
  width: 100%;
  height: 100%;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "financial-control financial-control costs costs user-sidebar user-sidebar"
    "financial-control financial-control costs costs user-sidebar user-sidebar"
    "cost-structure cost-structure costs costs user-sidebar user-sidebar"
    "cost-structure cost-structure cash-flow cash-flow user-sidebar user-sidebar"; 
} -->
