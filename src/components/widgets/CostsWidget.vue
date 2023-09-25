<template>
  <div class="cost-widget-wrapper">
    <font-awesome-icon icon="ellipsis-vertical" class="cost-menu" size="2xl" />
    <h3 class="costs-title">Recent entries</h3>
    <p class="costs-description">The last 30 days</p>
    <div class="costs">
      <ul class="costs__list">
        <li class="costs__item" v-for="cost in costs" :key="cost.id">
          <img class="costs__img" src="" alt="" />
          <div class="costs__info">
            <span class="costs__category-type">{{ cost.costType }}</span>
            <span class="costs__account-type">{{ cost.accountType }}</span>
          </div>
          <div class="costs__date-and-sum">
            <span class="costs__date">5, 00 uah</span>
            <span class="costs__sum">Yesterday</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const costs = [
  { id: 1, costType: 'Test 1', accountType: 'Account 1' },
  { id: 2, costType: 'Test 2', accountType: 'Account 2' },
  { id: 3, costType: 'Test 3', accountType: 'Account 3' },
  { id: 4, costType: 'Test 4', accountType: 'Account 4' },
  { id: 5, costType: 'Test 5', accountType: 'Account 5' },
  { id: 6, costType: 'Test 6', accountType: 'Account 6' },
  { id: 7, costType: 'Test 7', accountType: 'Account 7' },
  { id: 8, costType: 'Test 8', accountType: 'Account 8' },
  { id: 9, costType: 'Test 9', accountType: 'Account 9' }
]
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar.scss';
.cost-widget-wrapper {
  grid-area: costs;
  padding: 14px;
  overflow-y: auto;
  overflow-x: hidden;
  @include scrollbar(4px, rgb(56, 56, 56));
  position: relative;
  .cost-menu {
    position: absolute;
    top: 16px;
    right: 20px;
    cursor: pointer;
  }
  .costs-title {
    text-align: left;
    font-size: 22px;
    margin-bottom: 10px;
  }
  .costs-description {
    font-size: 14px;
    font-weight: 600;
    color: rgb(114, 114, 114);
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .costs {
    &__list {
    }
    &__item {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      border-bottom: 1px solid rgb(172, 172, 172);
      cursor: pointer;

      &:last-child {
        margin: 0;
      }
    }
    &__img {
      width: 40px;
      height: 40px;
      background-color: blueviolet;
      border-radius: 100%;
      object-fit: cover;
      margin-right: 10px;
    }
    &__info {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
    }
    &__category-type,
    .costs__date {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 2px;
    }
    &__account-type,
    .costs__sum {
      font-size: 14px;
      color: rgb(114, 114, 114);
    }
    &__date-and-sum {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
