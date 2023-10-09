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
        <li class="popup-widget-menu__item" v-for="{ id, period } in periods" :key="id">
          {{ period }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isMenu: boolean; iconColor?: string }>()

defineEmits<{
  (e: 'isMenu'): void
}>()

const periods = [
  { id: 1, period: 'Today' },
  { id: 1, period: 'This week' },
  { id: 1, period: 'This month' },
  { id: 1, period: 'This year' }
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
    @media screen and (max-width: 640px) {
      right: 10px;
    }
  }
  &__content {
    position: absolute;
    width: 280px;
    top: 40px;
    right: 0;
    z-index: 800;
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
