<template>
  <WidgetCategoryItem
    :category="{
      text: balance.text,
      icon: balance.icon,
      iconBackground: balance.iconBackground
    }"
  >
    <template #balance>
      <div class="balance-wrapper">
        <span class="balance">{{ balance.balance }}</span>
      </div>
    </template>
  </WidgetCategoryItem>
</template>

<script setup lang="ts">
import WidgetCategoryItem from './WidgetCategoryItem.vue'

defineProps<{
  balance: {
    text: string
    icon: string
    iconBackground: string
    balance: string
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