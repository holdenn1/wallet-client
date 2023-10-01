<template>
  <div
    @click.stop
    class="main-page-greeting"
    :class="{ 'main-page-greeting-active': mainStore.mainState.isModalVisible }"
  >
    <h3 class="main-page-greeting__text">Welcome to the wallet</h3>
    <div class="main-page-navigation">
      <button
        type="button"
        @click="handleLoginModal"
        class="main-page-navigation__navigate-to-login"
      >
        <font-awesome-icon icon="right-to-bracket" /> <span>Login to the account</span>
      </button>
      <button
        type="button"
        @click="handleRegistrationModal"
        class="main-page-navigation__navigate-to-registration"
      >
        <font-awesome-icon icon="user-plus" /> <span>Create an account</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/mainStore'

const emit = defineEmits<{
  (e: 'login'): void
  (e: 'registration'): void
}>()

const mainStore = useMainStore()

const handleLoginModal = () => {
  mainStore.setModalVisible(true)
  emit('login')
}

const handleRegistrationModal = () => {
  mainStore.setModalVisible(true)
  emit('registration')
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/mainLinkNavigation.scss';
@import '@/styles/mixins/d-flex-ctr.scss';

.main-page-greeting {
  padding: 20px;
  box-sizing: border-box;
  opacity: 1;
  transition: 1.2s;

  &__text {
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }
  .main-page-navigation {
    @include flexCenter;
    @media screen and (max-width: 460px) {
      flex-direction: column;
    }
    &__navigate-to-login {
      @include mainLinkNavigation(#0e38a9, rgb(31, 31, 199), rgb(57, 57, 190));
      span {
        padding-left: 10px;
      }
    }
    &__navigate-to-registration {
      @include mainLinkNavigation(
        hsl(243deg 67.66% 42.36%),
        hsl(243, 76%, 40%),
        hsl(243, 76%, 40%)
      );
      span {
        padding-left: 10px;
      }
    }
  }
}

.main-page-greeting-active {
  opacity: 0;
  transition-duration: 0.4s;
}
</style>
