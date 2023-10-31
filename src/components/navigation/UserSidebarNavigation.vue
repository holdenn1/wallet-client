<template>
  <div class="user-navigation">
    <router-link :to="{ name: 'user-settings' }" class="user-navigation__settings-link">
      <font-awesome-icon
        icon="fa-sliders"
        style="color:  hsl(199, 90%, 47%); padding-right: 8px"
      />Settings
    </router-link>
    <button class="user-navigation__logout-btn" type="button" @click="userStore.logoutUser">
      <font-awesome-icon
        icon="fa-arrow-right-from-bracket"
        style="color:  hsl(199, 90%, 47%); padding-right: 8px"
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
@import '@/styles/mixins/d-flex-ctr';

.user-navigation {
  width: 100%;
  height: calc(100vh - 360px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 760px) {
    height: calc(100vh - 408px);
  }
  @media screen and (max-width: 340px) {
    padding: 10px;
  }
  &__settings-link {
    @include userSidebarBtn(240px, 42px);
    @include flexCenter;
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
      background-color: hsl(199, 100%, 32%);
    }
  }
}
</style>
