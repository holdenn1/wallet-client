<template>
  <div class="bills-widget">
    <h4 class="bills-widget__title">Bills</h4>
    <div class="bills">
      <div class="bills__bill">
        <span class="bills__bill-type">Cash</span>
        <span class="bills__bill-money">1 000 000. 00</span>
      </div>
      <button class="bills__add-bill">
       Credit card
        <font-awesome-icon
          icon="fa-circle-plus"
          style="color: hsl(242, 61%, 48%); padding-left: 8px"
        />
      </button>
    </div>
    <div class="balance-control">
      <button class="balance-control__balance-setting">Adjust the balance</button>
      <button class="balance-control__balance-history">
        <font-awesome-icon
          icon="fa-calendar-minus"
          style="color: hsl(242, 61%, 48%); padding-right: 8px"
        />History
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/styles/mixins/user-sidebar-btn.scss';
.bills-widget {
  height: 162px;
  overflow: hidden;
  padding: 20px;
  border-bottom: 1px solid rgb(207, 207, 207);

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
      @include userSidebarBtn(130px, 40px);
      border: 1px solid hsl(242, 61%, 48%);
    }
  }
  .balance-control {
    display: flex;
    justify-content: space-between;
    &__balance-setting {
      @include userSidebarBtn(160px, 36px);
    }
    &__balance-history {
      @include userSidebarBtn(110px, 36px);
    }
  }
}
</style>
