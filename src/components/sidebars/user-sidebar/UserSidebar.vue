<template>
  <div class="user-sidebar">
    <div class="user-sidebar__user-info">
      <div class="user-info">
        <img :src="preAvatar" alt="" class="user-info__avatar" />
        <h4 class="user-info__full-name">Lorem, ipsum.</h4>
      </div>
    </div>
    <BillsWidget />
    <UserSidebarNavigation />
  </div>
</template>

<script setup lang="ts">
import BillsWidget from './UserBills.vue'
import preAvatar from '@/assets/icons/user-avatar.png'
import UserSidebarNavigation from 'navigation/UserSidebarNavigation.vue'
</script>

<style lang="scss" scoped>
.user-sidebar {
  grid-area: user-sidebar;
  background-color: hsl(240, 12%, 97%);
  overflow: hidden;

  .user-info {
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    background-color: hsl(199, 60%, 49%);
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
