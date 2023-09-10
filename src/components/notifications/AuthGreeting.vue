<template>
  <div class="auth-greeting-wrapper">
    <div class="greeting-text-wrapper">
      <h4 class="greeting-text">
        Manage your <span style="color: rgb(0, 201, 17)">finances</span> with your
        <span>Wallet</span>
      </h4>
    </div>
    <div class="auth-navigate-wrapper">
      <a :href="googleRedirect" class="navigate-to-google">
        {{ googleBtnText }}
      </a>
      <button type="button" class="navigate-to-auth" @click="() => userStore.setContinueAuth(true)">
        {{ emailBtnText }}
      </button>
    </div>
    <div class="is-has-account-wrapper">
      <h4 class="is-has-account-text">
        Already have an <span style="color: rgb(45, 72, 190); font-weight: 600">account</span>?
        <RouterLink :to="{ name: navigateLink }" style="font-weight: 600">
          {{ navigateLink === 'sign-up' ? 'Sign up' : 'Sign in' }}
        </RouterLink>
      </h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore'

import { useLink, RouterLink } from 'vue-router'
import { computed } from 'vue'

defineProps<{ googleBtnText: string; emailBtnText: string }>()

const userStore = useUserStore()
const googleRedirect = 'http://localhost:7000/auth/google/redirect'

//@ts-ignore
const { route } = useLink({ ...RouterLink.props })

const navigateLink = computed(() => {
  return route.value.name === 'sign-up' ? 'sign-in' : 'sign-up'
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
@import '@/styles/mixins/mainLinkNavigation.scss';

.auth-greeting-wrapper {
  width: 100%;
  height: 100%;
  background-color: rgb(241, 235, 235);
  padding: 20px;
  border-radius: 14px;
  @include flexCenter;
  flex-direction: column;
  .greeting-text-wrapper {
    margin: 20px 0 40px;
    .greeting-text {
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
  .auth-navigate-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .navigate-to-google {
      @include mainLinkNavigation(#0e38a9, rgb(31, 31, 199), rgb(57, 57, 190));
    }
    .navigate-to-auth {
      @include mainLinkNavigation(
        hsl(243deg 67.66% 42.36%),
        hsl(243, 76%, 40%),
        hsl(243, 76%, 40%)
      );
    }
  }
  .is-has-account-wrapper {
    margin: 20px;
    .is-has-account-text {
      text-align: center;
      font-size: 20px;
    }
  }
}
</style>
