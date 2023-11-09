<template>
  <div class="popup-widget-menu">
    <font-awesome-icon
      @click.stop="$emit('isMenu')"
      icon="fa-clock"
      class="popup-widget-menu__icon"
      :style="{ color: iconColor }"
      size="2xl"
    />
    <div @click.stop v-show="isMenu" class="popup-widget-menu__content">
      <h3 class="popup-widget-menu__title">Choose a period</h3>
      <ul class="popup-widget-menu__list">
        <li
          class="popup-widget-menu__item"
          v-for="{ id, period, value } in periods"
          :key="id"
          @click="$emit('period', period)"
        >
          {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Period } from '@/api/requests/types'

defineProps<{ isMenu: boolean; iconColor?: string }>()

defineEmits<{
  (e: 'isMenu'): void
  (e: 'period', data: Period): void
}>()

type PeriodMenu = {
  id: number
  period: Period
  value: string
}

const periods: PeriodMenu[] = [
  { id: 1, value: 'Today', period: 'today' },
  { id: 2, value: 'This week', period: 'week' },
  { id: 3, value: 'This month', period: 'month' },
  { id: 4, value: 'This year', period: 'year' }
]
</script>

<style lang="scss" scoped>
.popup-widget-menu {
  position: relative;

  &__icon {
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
    @media screen and (max-width: 760px) {
      right: 10px;
    }
  }
  &__content {
    position: absolute;
    width: 280px;
    top: 40px;
    right: 0;
    z-index: 500;
    background-color: #e0e0e0;
    box-shadow: 3px 3px 6px 0px rgba(46, 46, 46, 0.75);
    padding: 14px;
  }

  &__title {
    font-size: 20px;
    font-weight: 500;
  }

  &__list {
    margin: 12px 0 0 16px;
  }

  &__item {
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: 500;
    a {
      display: block;
    }
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #272727;
      transition: width 0.4s;
    }
    &:hover::after {
      width: 100%;
    }
    &:last-child {
      margin: 0;
    }
  }
}
</style>
