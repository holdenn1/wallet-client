<template>
  <div class="bills-widget-wrapper">
    <h4 class="bills-title">Bills</h4>
    <div class="bills-container">
      <div class="bill">
        <span class="bill__type">Cash</span>
        <span class="bill__money">1 000 000. 00</span>
      </div>
      <button class="add-bill">
        Add the bill
        <font-awesome-icon
          icon="fa-circle-plus"
          style="color: hsl(242, 61%, 48%); padding-left: 8px"
        />
      </button>
    </div>
    <div class="balance-control-container">
      <button class="balance-setting">Adjust the balance</button>
      <button class="balance-history">
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
.bills-widget-wrapper {
  height: 162px;
  overflow: hidden;
  padding: 20px;
  border-bottom: 1px solid rgb(207, 207, 207);

  .bills-title {
    font-size: 18px;
    text-align: left;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .bills-container {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    .bill {
      @include userSidebarBtn(130px, 40px);
      background-color: hsl(242, 61%, 48%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 4px 10px;
      cursor: pointer;

      .bill__type,
      .bill__money {
        font-size: 14px;
        color: white;
      }
    }
    .add-bill {
      @include userSidebarBtn(130px, 40px);
      border: 1px solid hsl(242, 61%, 48%);
    }
  }
  .balance-control-container {
    display: flex;
    justify-content: space-between;
    .balance-setting {
      @include userSidebarBtn(160px, 36px);
    }
    .balance-history {
      @include userSidebarBtn(110px, 36px);
    }
  }
}
</style>
