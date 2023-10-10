<template>
  <div @click="() => (isMenu = false)" class="cost-widget">
    <PopupWidgetMenu :is-menu="isMenu" @is-menu="() => (isMenu = !isMenu)" />
    <WidgetTitle />
    <div class="costs">
      <ul class="costs__list">
        <li class="costs__item" v-for="cost in costs" :key="cost.id">
          <router-link class="costs__link" :to="{ name: 'operation-details' }">
            <img class="costs__img" src="" />
            <div class="costs__info">
              <span class="costs__category-type">{{ cost.costType }}</span>
              <span class="costs__account-type">{{ cost.accountType }}</span>
            </div>
            <div class="costs__date-and-sum">
              <span class="costs__date">5, 00 uah</span>
              <span class="costs__sum">Yesterday</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import PopupWidgetMenu from 'components/menus/PopupWidgetMenu.vue'
import { ref } from 'vue'
import WidgetTitle from 'ui/titles/WidgetTitle.vue'

const isMenu = ref<boolean>(false)

const costs = [
  { id: 1, costType: 'Test 1', accountType: 'Account 1', img: '' },
  { id: 2, costType: 'Test 2', accountType: 'Account 2', img: '' },
  { id: 3, costType: 'Test 3', accountType: 'Account 3', img: '' },
  { id: 4, costType: 'Test 4', accountType: 'Account 4', img: '' },
  { id: 5, costType: 'Test 5', accountType: 'Account 5', img: '' },
  { id: 6, costType: 'Test 6', accountType: 'Account 6', img: '' },
  { id: 7, costType: 'Test 7', accountType: 'Account 7', img: '' },
  { id: 8, costType: 'Test 8', accountType: 'Account 8', img: '' },
  { id: 9, costType: 'Test 9', accountType: 'Account 9', img: '' }
]
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar.scss';
@import '@/styles/mixins/d-flex-js-sb-al-ctr.scss';
.cost-widget {
  grid-area: costs;
  padding: 20px 40px;
  overflow-y: auto;
  overflow-x: hidden;
  @include scrollbar(4px, rgb(56, 56, 56));
  position: relative;

  .costs {
    &__item {
      margin-bottom: 10px;
      border-bottom: 1px solid rgb(172, 172, 172);
      cursor: pointer;

      &:last-child {
        margin: 0;
      }
    }

    &__link {

      width: 100%;
      height: 60px;
      @include flex-js-sb-al-ctr;
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