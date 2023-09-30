<template>
  <div class="cost-categories-menu">
    <div class="cost-categories-menu__title-wrapper">
      <h3 class="cost-categories-menu__title">All Categories</h3>
    </div>
    <div class="cost-categories-menu__container">
      <div
        v-for="{ id, icon, backgroundColor } in costCategories"
        :key="id"
        class="cost-categories-menu__icon-wrapper"
        :style="backgroundColor"
      >
        <font-awesome-icon :icon="icon" style="color: white" size="2xl" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const costCategories = [
  {
    id: 1,
    icon: 'fa-utensils',
    backgroundColor: 'background-color: rgb(245, 17, 17);'
  },
  {
    id: 2,
    icon: 'fa-bag-shopping',
    backgroundColor: 'background-color: rgb(17, 180, 245);'
  },
  {
    id: 3,
    icon: 'fa-house-user',
    backgroundColor: 'background-color: rgb(245, 127, 17);'
  },
  {
    id: 4,
    icon: 'fa-bus',
    backgroundColor: 'background-color: rgb(114, 114, 114);'
  },
  {
    id: 5,
    icon: 'fa-car',
    backgroundColor: 'background-color: rgb(199, 13, 245);'
  },
  {
    id: 6,
    icon: 'fa-person',
    backgroundColor: 'background-color: rgb(13, 67, 245);'
  },
  {
    id: 7,
    icon: 'fa-desktop',
    backgroundColor: 'background-color: rgb(39, 52, 235);'
  },
  {
    id: 8,
    icon: 'fa-bars',
    backgroundColor: 'background-color: rgb(172, 92, 0);'
  }
]
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.cost-categories-menu {
  width: calc(100vw - 320px);
  height: calc(100vh - 60px);
  @media screen and (max-width: 940px) {
    width: 100vw;
    height: calc(100vh - 60px);
  }
  &__title-wrapper {
    width: 100%;
    height: 40px;
    background-color: rgb(146, 146, 146);
    @include flexCenter;
  }
  &__title {
    font-size: 20px;
    font-weight: 500;
    color: white;
  }
  &__container {
  

  }
  &__icon-wrapper{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    cursor: pointer;
    @include flexCenter;
  }
}
</style>
