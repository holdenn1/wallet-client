<template>
  <div class="select-account">
    <WidgetPanelHeader header-title-text="Operation settings" />
    <WidgetPanelContentWrapper>
      <WidgetBalanceItem
        :balance="{
          icon: 'fa-sack-dollar',
          iconBackground: 'background-color: rgb(8 217 0);',
          text: 'Cash',
          balance: '2200.00'
        }"
      />
      <!--This will be credit cards list      -->
      <!--      <WidgetBalanceItem v-for="{ id, ...rest } in balance" :key="id" :balance="rest" />-->
    </WidgetPanelContentWrapper>
  </div>
</template>

<script setup lang="ts">
import WidgetBalanceItem from 'components/items/WidgetBalanceItem.vue'
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import WidgetPanelContentWrapper from 'ui/wrappers/WidgetPanelContentWrapper.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar.scss';
.select-account {
  width: 100%;
  height: 100%;
}
</style>
