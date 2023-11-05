<template>
  <div @click.stop class="user-sidebar" :class="{ 'user-sidebar_active': mainState.isMenuVisible }">
    <div class="menu-button-wrapper">
      <MenuButton :handle-click="() => setMenuVisible(!mainState.isMenuVisible)">Menu</MenuButton>
    </div>
    <div class="user-sidebar__content">
      <div class="user-sidebar__user-info">
        <div class="user-info">
          <input class="upload-photo-input" type="file" @change="handleFileInputChange" />
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
import MenuButton from 'ui/buttons/MenuButton.vue'
import preAvatar from '@/assets/icons/user-avatar.png'
import UserSidebarNavigation from 'navigation/UserSidebarNavigation.vue'

import { useResize } from '@/hooks/useResize'
import { useMainStore } from '@/store/mainStore'
import { useUserStore } from '@/store/userStore'
import { updateUserDateRequest, uploadAvatar } from '@/api/requests'

import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'

import type { User } from '@/store/types/userStoreTypes'

const mainStore = useMainStore()
const userStore = useUserStore()

const { resizeWindow } = useResize()

const { mainState } = storeToRefs(mainStore)
const { userState } = storeToRefs(userStore)

const { setMenuVisible } = mainStore

watchEffect(() => {
  if (resizeWindow.value < 960) {
    setMenuVisible(false)
  } else {
    setMenuVisible(true)
  }
})

const handleFileInputChange = async (event: Event) => {
  try {
    const fileInput = event.target as HTMLInputElement
    const file = fileInput.files && fileInput.files[0]

    if (file) {
      const { data: avatarLink }: { data: string } = await uploadAvatar(file)
      const { data: user }: { data: User } = await updateUserDateRequest({ photo: avatarLink })
      if (!avatarLink && !user) {
        throw new Error()
      }
      userStore.setUser(user)
    }
  } catch (e) {
    console.error(e)
  }
}
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
      .upload-photo-input {
        position: absolute;
        top: 26px;
        left: 20px;
        opacity: 0;
        width: 80px;
        height: 80px;
        border-radius: 100%;
        cursor: pointer;
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
}
.user-sidebar_active {
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.3s;
}
</style>
