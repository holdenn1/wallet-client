<template>
  <div class="bills-widget">
    <h4 class="bills-widget__title">Bills</h4>
    <div class="bills">
      <div class="bills__bill">
        <span class="bills__bill-type">Cash</span>
        <span class="bills__bill-money">1 000 000. 00</span>
      </div>
      <router-link :to="{ name: 'add-credit-card' }" class="bills__add-bill">
        Credit card
        <font-awesome-icon icon="fa-circle-plus" class="bills-icon" />
      </router-link>
    </div>
    <div class="balance-control">
      <router-link :to="{ name: 'correct-balance' }" class="balance-control__balance-setting"
        >Correct the balance</router-link
      >
      <router-link :to="{ name: 'operations-history' }" class="balance-control__balance-history">
        <font-awesome-icon icon="fa-calendar-minus" class="balance-control-icon" />History
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/styles/mixins/user-sidebar-btn.scss';
@import '@/styles/mixins/d-flex-ctr.scss';
.bills-widget {
  height: 162px;
  overflow: hidden;
  padding: 20px;
  border-bottom: 1px solid rgb(207, 207, 207);
  @media screen and (max-width: 340px) {
    padding: 8px;
  }

  &__title {
    font-size: 18px;
    text-align: left;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .bills {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    &__bill {
      @include userSidebarBtn(130px, 40px);
      background-color: hsl(242, 61%, 48%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 4px 10px;
      cursor: pointer;
    }
    &__bill-type,
    &__bill-money {
      font-size: 14px;
      color: white;
    }
    &__add-bill {
      @include flexCenter;
      @include userSidebarBtn(130px, 40px);
      border: 1px solid hsl(242, 61%, 48%);
      position: relative;
      padding-right: 10px;
      .bills-icon {
        position: absolute;
        top: 9px;
        right: 6px;
        color: hsl(242, 61%, 48%);

      }
    }
  }
  .balance-control {
    display: flex;
    justify-content: space-between;
    gap: 10px;


    &__balance-setting {
      @include userSidebarBtn(160px, 36px);
      @include flexCenter;
    }
    &__balance-history {
      @include userSidebarBtn(110px, 36px);
      padding-right: 10px;
      @include flexCenter;
      position: relative;
    .balance-control-icon {
      color: hsl(242, 61%, 48%);
      position: absolute;
      top: 9px;
      right: 6px;
    }
    }
  }
}
</style>
