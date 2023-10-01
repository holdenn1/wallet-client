<template>
  <div class="confirm-email">
    <div>
      <h3 class="confirm-email__title">Welcome to the Wallet!</h3>
      <p class="confirm-email__text">
        We sent you a message to
        <a href="https://mail.google.com/">
          <span>{{ email }}</span>
        </a>
        with a link to confirm your account, please go to confirm your mail to continue using the
        application
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ email: string | undefined }>()
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-ctr.scss';
.confirm-email {
  @include flexCenter;
  width: 50vw;
  height: 50vh;
  max-width: 720px;
  background-color: rgb(241, 235, 235);
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  padding: 10px;

  @media screen and (max-width: 1024px) {
    margin: 12px;
    width: 31.875rem;
    height: 24.375rem;
  }
  &__title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
    @media screen and (max-width: 455px) {
      font-size: 28px;
    }
  }

  &__text {
    text-align: center;
    font-size: 28px;
    @media screen and (max-width: 455px) {
      font-size: 22px;
    }
    span {
      font-weight: 600;
      color: hsl(242, 61%, 48%);
    }
  }
}
</style>
