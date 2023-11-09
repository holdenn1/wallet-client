<template>
  <!--  -->
  <div @click="() => (isMenu = false)" class="cost-widget">
    <PopupWidgetMenu
      :is-menu="isMenu"
      @is-menu="() => (isMenu = !isMenu)"
      @period="(data) => (period = data)"
    />
    <WidgetTitle :period="period" />
    <div class="costs" v-show="transactionsStore.transactionState.transactionHistoryList.length">
      <ul class="costs__list">
        <li
          class="costs__item"
          v-for="transaction in transactionsStore.transactionState.transactionHistoryList"
          :key="transaction.id"
        >
          <router-link
            class="costs__link"
            :to="{ name: 'operation-details', params: { operationId: transaction.id } }"
          >
            <div
              class="costs__icon-wrapper"
              :style="
                transaction.subcategory?.subcategoryIconBackground ??
                transaction.category.categoryIconBackground
              "
            >
              <font-awesome-icon
                :icon="
                  transaction.subcategory?.subcategoryIcon ?? transaction.category.categoryIcon
                "
                style="color: white"
                size="2xl"
              />
            </div>

            <div class="costs__info">
              <span class="costs__category-type">{{
                transaction.subcategory?.subcategory ?? transaction.category.category
              }}</span>
              <span class="costs__account-type">{{
                transaction.paymentMethod === 'cash'
                  ? transaction.paymentMethod
                  : transaction.creditCard?.bankName
              }}</span>
              <span class="costs__account-type"
                >{{ transaction.description }}
                {{ transaction.description.length && transaction.recipient.length ? '-' : '' }}
                {{ transaction.recipient }}</span
              >
            </div>
            <div class="costs__date-and-sum">
              <span
                class="costs__sum"
                :style="{
                  color: transaction.type === 'income' ? 'rgb(0, 194, 65)' : 'rgb(191, 3, 3)'
                }"
                >{{ transaction.type === 'income' ? '+' : '-' }}{{ ' '
                }}{{ transaction.amount }},00</span
              >

              <span class="costs__date">{{
                new Date(transaction.createAt).toISOString().split('T')[0]
              }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div ref="div" class="observer"></div>
    <div
      v-if="!transactionsStore.transactionState.transactionHistoryList.length"
      class="cost-widget-error"
    >
      <p>No transactions found. Please create the new transaction</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import PopupWidgetMenu from 'components/menus/PopupWidgetMenu.vue'

import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import WidgetTitle from 'ui/titles/WidgetTitle.vue'
import { useTransactionStore } from '@/store/transactionStore'
import { getTransactionsByPeriod } from '@/api/requests'
import type { Transaction } from '@/store/types/transactionStoreTypes'
import type { Period } from '@/api/requests/types'

const isMenu = ref<boolean>(false)

const period = ref<Period>('month')

const loading = ref(false)

const transactionsStore = useTransactionStore()

const observer = new IntersectionObserver(async ([entry]) => {

  if (entry.isIntersecting && !loading.value) {
    loading.value = true
    await transactionsStore.getTransactions(period.value)
    loading.value = false
  }
})

const div = ref()

onMounted(() => {
  observer.observe(div.value)
})

onBeforeUnmount(() => observer.disconnect())

watch(period, async () => {
  if (loading.value) return

  loading.value = true
  try {
    transactionsStore.setCurrentPage(1)
    
    const { data }: { data: Transaction[] } = await getTransactionsByPeriod(
      period.value,
      String(transactionsStore.transactionState.currentPage)
    )

    if (data) {
      transactionsStore.setTransactions(data)
    transactionsStore.setCurrentPage(transactionsStore.transactionState.currentPage + 1)

    }
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/scrollbar.scss';
@import '@/styles/mixins/d-flex-ctr.scss';
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
      overflow: hidden;
      &:last-child {
        margin: 0;
      }
    }

    &__link {
      width: 100%;
      height: 70px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
    }
    &__icon-wrapper {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      margin-right: 10px;

      @include flexCenter;
      &:last-child {
        margin: 0;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
    }
    &__category-type,
    .costs__sum {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 2px;
    }

    &__category-type,
    &__account-type {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 200px;

      @media screen and (max-width: 1200px) {
        width: 90px;
      }
      @media screen and (max-width: 960px) {
        width: 200px;
      }
      @media screen and (max-width: 860px) {
        width: 90px;
      }
    }

    &__date-and-sum {
      text-align: right;
      text-wrap: nowrap;
      span {
        display: block;
      }
    }
  }
}

.cost-widget-error {
  height: 100%;
  @include flexCenter;
  p {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
  }
}
</style>
