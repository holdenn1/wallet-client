<template>
  <header class="widget-panel-header">
    <button type="button" @click="() => router.go(-1)">
      <font-awesome-icon icon="circle-arrow-left" class="return-icon" size="2xl" />
    </button>
    <h3 class="widget-panel-header__title">{{ headerTitleText }}</h3>
  </header>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'

defineProps<{ headerTitleText?: string }>()

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
  @include flexCenter;
  position: relative;
  .return-icon {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(0, -50%);
    color: white;
  }
  &__title {
    font-size: 20px;
    font-weight: 500;
    color: white;
  }
}
</style>
