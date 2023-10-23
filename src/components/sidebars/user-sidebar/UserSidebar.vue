<template>
  <div @click.stop class="user-sidebar" :class="{ 'user-sidebar_active': mainState.isMenuVisible }">
    <div class="menu-button-wrapper">
      <MenuButton :handle-click="() => setMenuVisible(!mainState.isMenuVisible)">Menu</MenuButton>
    </div>
    <div class="user-sidebar__content">
      <div class="user-sidebar__user-info">
        <div class="user-info">
          <img :src="userState.user?.photo ?? preAvatar" alt="" class="user-info__avatar" />
          <h4 class="user-info__full-name">
            {{ userState.user?.firstName }} {{ userState.user?.lastName }}
          </h4>
        </div>
      </div>
      <BillsWidget />
      <UserSidebarNavigation />
    </div>
  </div>
</template>

<script setup lang="ts">
import BillsWidget from './UserBills.vue'
import preAvatar from '@/assets/icons/user-avatar.png'
import UserSidebarNavigation from 'navigation/UserSidebarNavigation.vue'
import MenuButton from 'ui/buttons/MenuButton.vue'

import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import { useMainStore } from '@/store/mainStore'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/userStore'

const mainStore = useMainStore()
const userStore = useUserStore()
const resizeWindow = ref(0)

const { mainState } = storeToRefs(mainStore)
const { userState } = storeToRefs(userStore)

const { setMenuVisible } = mainStore
const handleResize = () => (resizeWindow.value = window.innerWidth)

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

watchEffect(() => {
  if (resizeWindow.value < 960) {
    setMenuVisible(false)
  } else {
    setMenuVisible(true)
  }
})
</script>

<style lang="scss" scoped>
.user-sidebar {
  width: 320px;
  grid-area: user-sidebar;
  background-color: hsl(240, 12%, 97%);
  position: relative;
  z-index: 1200;
  transition: 0.7s;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    right: -320px;
  }

  @media screen and (max-width: 340px) {
    width: 290px;
    right: -290px;
  }
  .menu-button-wrapper {
    display: none;
    position: absolute;
    top: 120px;
    left: -64px;
    z-index: 500;
    @media screen and (max-width: 960px) {
      display: block;
    }
    @media screen and (max-width: 374px) {
    }
  }

  &__content {
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
}
.user-sidebar_active {
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.3s;
}
</style>
