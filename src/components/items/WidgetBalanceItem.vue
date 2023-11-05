<template>
  <WidgetCategoryItem
    :category="{
      text: balance.bankName,
      icon: balance.bankIcon,
      iconBackground: balance.bankBackgroundColor
    }"
  >
    <template #balance>
      <div class="balance-wrapper">
        <span class="balance">{{ balance.balance }},00</span>
      </div>
    </template>
  </WidgetCategoryItem>
</template>

<script setup lang="ts">
import WidgetCategoryItem from './WidgetCategoryItem.vue'
defineProps<{
  balance: {
    bankName: string
    balance: string | undefined
    bankBackgroundColor: string
    bankIcon: string
  }
}>()
</script>

<style lang="scss" scoped>
.balance-wrapper {
  margin: 0 40px 0 auto;
  .balance {
    font-weight: 600;
  }
}
</style>
