<template>
  <header class="widget-panel-header">
    <slot v-if="isNavigateBack" name="return" />

    <router-link v-else class="widget-panel-header__link" :to="{ name: 'default-widgets' }">
      <font-awesome-icon icon="circle-arrow-left" size="2xl" class="widget-panel-header__icon" />
    </router-link>
    <h3 class="widget-panel-header__title">{{ headerTitleText }}</h3>
    <div class="widget-panel-header__confirm">
      <slot name="confirm" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps<{ headerTitleText?: string; isNavigateBack?: boolean }>()

const router = useRouter()
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
  @media screen and (max-width: 640px) {
    .widget-panel-header {
      display: flex;
      justify-content: space-around;
      &__link {
        order: 3;
      }
      &__icon {
        transform: rotate(180deg);
      }
      &__title {
        order: 2;
      }
      &__confirm {
        order: 1;
      }
    }
  }
}
</style>
