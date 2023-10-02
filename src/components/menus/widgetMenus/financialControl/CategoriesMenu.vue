<template>
  <div class="cost-categories-menu">
    <div class="cost-categories-menu__title-wrapper">
      <router-link :to="{ name: 'default-widgets' }">
        <font-awesome-icon icon="circle-arrow-left" class="return-icon" size="2xl" />
      </router-link>
      <h3 class="cost-categories-menu__title">{{ categoryText }} Categories</h3>
    </div>
    <div class="categories-list">
      <div
        class="categories-list__item"
        v-for="{ id, icon, backgroundColor, text } in categories"
        :key="id"
      >
        <div class="categories-list__icon-wrapper" :style="backgroundColor">
          <font-awesome-icon :icon="icon" style="color: white" size="2xl" />
        </div>
        <span class="categories-list__text">{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const costCategories = [
  {
    id: 1,
    icon: 'fa-utensils',
    backgroundColor: 'background-color: rgb(245, 17, 17);',
    text: 'Food'
  },
  {
    id: 2,
    icon: 'fa-bag-shopping',
    backgroundColor: 'background-color: rgb(17, 180, 245);',
    text: 'Shopping'
  },
  {
    id: 3,
    icon: 'fa-house-user',
    backgroundColor: 'background-color: rgb(245, 127, 17);',
    text: 'Home'
  },
  {
    id: 4,
    icon: 'fa-bus',
    backgroundColor: 'background-color: rgb(114, 114, 114);',
    text: 'Public transport'
  },
  {
    id: 5,
    icon: 'fa-car',
    backgroundColor: 'background-color: rgb(199, 13, 245);',
    text: 'Personal transport'
  },
  {
    id: 6,
    icon: 'fa-person',
    backgroundColor: 'background-color: rgb(13, 67, 245);',
    text: 'Leisure'
  },
  {
    id: 7,
    icon: 'fa-desktop',
    backgroundColor: 'background-color: rgb(39, 52, 235);',
    text: 'Internet'
  },
  {
    id: 8,
    icon: 'fa-bars',
    backgroundColor: 'background-color: rgb(172, 92, 0);',
    text: 'Other'
  }
]

const incomeCategories = [
  {
    id: 1,
    icon: 'fa-arrow-right-from-bracket',
    backgroundColor: 'background-color: rgb(245, 17, 17);',
    text: 'Food'
  },
  {
    id: 2,
    icon: 'fa-baby',
    backgroundColor: 'background-color: rgb(17, 180, 245);',
    text: 'Shopping'
  },
  {
    id: 3,
    icon: 'fa-rotate-left',
    backgroundColor: 'background-color: rgb(245, 127, 17);',
    text: 'Home'
  },
  {
    id: 4,
    icon: 'fa-dollar-sign',
    backgroundColor: 'background-color: rgb(114, 114, 114);',
    text: 'Public transport'
  },
  {
    id: 5,
    icon: 'fa-gift',
    backgroundColor: 'background-color: rgb(199, 13, 245);',
    text: 'Personal transport'
  },
  {
    id: 6,
    icon: 'fa-money-bills',
    backgroundColor: 'background-color: rgb(13, 67, 245);',
    text: 'Leisure'
  }
]

const categories = computed(() => {
  if (route.query.type === 'cost') return costCategories
  if (route.query.type === 'income') return incomeCategories
  return null
})

const categoryText = computed(() => {
  if (route.query.type === 'cost') return 'Cost'
  if (route.query.type === 'income') return 'Income'
  return null
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
@import '@/styles/mixins/scrollbar.scss';
.cost-categories-menu {
  width: 100%;
  height: 100%;
  &__title-wrapper {
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
  }
  &__title {
    font-size: 20px;
    font-weight: 500;
    color: white;
  }

  .categories-list {
    width: 100%;
    height: calc(100vh - 120px);
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    @include scrollbar(4px, rgb(48, 48, 48));
    &__item {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      cursor: pointer;
    }
    &__text {
      margin-left: 20px;
      font-weight: 500;
    }
    &__icon-wrapper {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      cursor: pointer;
      @include flexCenter;
      &:last-child {
        margin: 0;
      }
    }
  }
}
</style>
