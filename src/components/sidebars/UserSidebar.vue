<template>
  <div class="user-sidebar-wrapper">
    <div class="user-info">
      <div class="user-info__container">
        <img :src="preAvatar" alt="" class="user-info__avatar" />
        <h4 class="user-info__full-name">Lorem, ipsum.</h4>
      </div>
    </div>
    <BillsWidget />
    <UserSidebarNavigation />
  </div>
</template>

<script setup lang="ts">
import preAvatar from '@/assets/icons/user-avatar.png'
import BillsWidget from 'components/widgets/BillsWidget.vue'
import UserSidebarNavigation from 'navigation/UserSidebarNavigation.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-col-js.scss';

.user-sidebar-wrapper {
  grid-area: user-sidebar;
  background-color: hsl(240, 12%, 97%);
  overflow: hidden;

  .user-info {
    &__container {
      width: 100%;
      height: 130px;
      display: flex;
      align-items: center;
      background-color: hsl(199, 60%, 49%);
    }

    &__avatar {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      object-fit: cover;
      margin: 0 14px 0 20px;
    }

    &__full-name {
      font-size: 20px;
      color: white;
      font-weight: 500;
    }
  }
}
</style>
