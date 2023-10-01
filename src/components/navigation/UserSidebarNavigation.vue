<template>
  <div class="user-navigation">
    <button class="user-navigation__settings-btn">
      <font-awesome-icon
        icon="fa-sliders"
        style="color: hsl(242, 61%, 48%); padding-right: 8px"
      />Settings
    </button>
    <button class="user-navigation__logout-btn" type="button" @click="userStore.logoutUser">
      <font-awesome-icon
        icon="fa-arrow-right-from-bracket"
        style="color: hsl(242, 61%, 48%); padding-right: 8px"
      />Logout
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/user-sidebar-btn.scss';

.user-navigation {
  width: 100%;
  height: calc(100vh - 352px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  &__settings-btn {
    @include userSidebarBtn(240px, 42px);
    margin-bottom: 20px;
    transition: 0.5s;
    &:hover {
      background-color: hsl(240, 15%, 81%);
    }
  }
  &__logout-btn {
    @include userSidebarBtn(240px, 42px);
    transition: 0.5s;
    &:hover {
      color: white;
      background-color: hsl(240, 55%, 54%);
    }
  }
}
</style>
