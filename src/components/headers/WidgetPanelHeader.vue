<template>
  <header class="widget-panel-header">
    <slot name="return" />

    <h3 class="widget-panel-header__title">{{ headerTitleText }}</h3>
    <div class="widget-panel-header__confirm">
      <slot name="confirm" />
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{ headerTitleText?: string }>()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.widget-panel-header {
  width: 100%;
  height: 60px;
  background-color: hsl(199, 60%, 49%);
  border-left: 1px solid hsl(199, 76%, 34%);
  border-right: 1px solid hsl(199, 76%, 34%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  &__title {
    font-size: 20px;
    font-weight: 500;
    color: white;
  }
  &__icon {
    color: white;
  }
  @media screen and (max-width: 760px) {
    .widget-panel-header {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
