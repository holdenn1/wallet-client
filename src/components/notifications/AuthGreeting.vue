<template>
  <div class="auth-greeting">
    <div class="greeting-text">
      <h4 class="greeting-text__text">
        Manage your <span style="color: rgb(0, 201, 17)">finances</span> with your
        <span>Wallet</span>
      </h4>
    </div>
    <div class="auth-navigate">
      <a
        @click="mainStore.setModalVisible(false)"
        :href="GOOGL_REDIRECT"
        class="auth-navigate__navigate-to-google"
      >
        <font-awesome-icon :icon="['fab', 'google']" style="padding-right: 10px" />
        <span>Continue with Google</span>
      </a>
      <router-link
        @click="mainStore.setModalVisible(false)"
        :to="{ path: navigateLink }"
        class="auth-navigate__navigate-to-auth"
      >
        <font-awesome-icon icon="envelope" style="padding-right: 10px" />
        <span> {{ authButtonsText }}</span>
      </router-link>
    </div>
    <div class="is-has-account">
      <h4 class="is-has-account__text">
        Already have an <span>account</span>?
        <router-link
          @click="mainStore.setModalVisible(false)"
          :to="`${navigateLink === 'sign-up' ? 'sign-in' : 'sign-up'}`"
          style="font-weight: 600"
        >
          {{ navigateLink === 'sign-in' ? 'Sign up' : 'Sign in' }}
        </router-link>
      </h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMainStore } from '@/store/mainStore'

const GOOGL_REDIRECT = 'https://wallet-server-production-1631.up.railway.app/auth/google/'

const props = defineProps<{
  authButtonsText: string
}>()

const mainStore = useMainStore()

const navigateLink = computed(() => {
  return props.authButtonsText.includes('up') ? 'sign-up' : 'sign-in'
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
@import '@/styles/mixins/mainLinkNavigation.scss';

.auth-greeting {
  width: 100%;
  height: 100%;
  background-color: rgb(241, 235, 235);
  padding: 20px;
  border-radius: 14px;
  @include flexCenter;
  flex-direction: column;
  .greeting-text {
    margin: 20px 0 40px;
    &__text {
      font-size: 24px;
      text-align: center;
      font-weight: 500;

      span {
        font-size: 28px;
        font-weight: 600;
        color: rgb(45, 72, 190);
      }
    }
  }
  .auth-navigate {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 560px) {
      flex-direction: column;
    }
    &__navigate-to-google {
      @include mainLinkNavigation(hsl(199, 90%, 47%), hsl(199, 90%, 47%), rgb(57, 57, 190));
    }
    &__navigate-to-auth {
      @include mainLinkNavigation(hsl(199, 90%, 47%), hsl(199, 90%, 47%), hsl(243, 76%, 40%));
    }
  }
  .is-has-account {
    margin: 20px;
    &__text {
      text-align: center;
      font-size: 20px;
      span {
        color: rgb(45, 72, 190);
        font-weight: 600;
      }
    }
  }
}
</style>
