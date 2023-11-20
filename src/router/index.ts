import MainPageVue from '@/pages/MainPage.vue'
import SignInPageVue from '@/pages/SignInPage.vue'
import SignUpPageVue from '@/pages/SignUpPage.vue'
import WalletPageVue from '@/pages/WalletPage.vue'
import RecoverPasswordPage from '@/pages/RecoverPasswordPage.vue'
import DefaultWidgets from 'components/widgets/widget-panel/DefaultWidgets.vue'
import OperationDetails from 'components/widgets/widget-panel/OperationDetails.vue'
import AddCreditCard from 'components/widgets/widget-panel/AddCreditCard.vue'
import UserSettings from 'components/widgets/widget-panel/UserSettings.vue'
import CorrectBalance from 'components/widgets/widget-panel/CorrectBalance.vue'
import TransactionHistory from 'components/widgets/widget-panel/TransactionHistory.vue'

import MainLayout from 'components/Layouts/MainLayout.vue'

import Widgets from 'components/widgets/Widgets.vue'
import NotFound from 'components/errors/NotFound.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/store/userStore'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      meta: { noAuth: true },
      children: [
        {
          path: '',
          name: 'home',
          component: MainPageVue,
          meta: { noAuth: true }
        },
        {
          path: 'sign-in',
          name: 'sign-in',
          component: SignInPageVue,
          meta: { noAuth: true }
        },
        {
          path: 'sign-up',
          name: 'sign-up',
          component: SignUpPageVue,
          meta: { noAuth: true }
        },
        {
          path: 'recover-password',
          name: 'recover-password',
          component: RecoverPasswordPage,
          meta: { noAuth: true , noRedirect: true}
        },
        {
          path: 'wallet',
          name: 'wallet',
          component: WalletPageVue,
          meta: { noAuth: false },
          children: [
            {
              path: 'widgets',
              name: 'widgets',
              component: Widgets,
              meta: { noAuth: false },
              children: [
                {
                  path: '',
                  name: 'default-widgets',
                  component: DefaultWidgets,
                  meta: { noAuth: false }
                },

                {
                  path: 'operation-details/:operationId',
                  name: 'operation-details',
                  component: OperationDetails,
                  meta: { noAuth: false }
                },

                {
                  path: 'correct-balance',
                  name: 'correct-balance',
                  component: CorrectBalance,
                  meta: { noAuth: false }
                },
                {
                  path: 'add-credit-card',
                  name: 'add-credit-card',
                  component: AddCreditCard,
                  meta: { noAuth: false }
                },
                {
                  path: 'operation-history',
                  name: 'operation-history',
                  component: TransactionHistory,
                  meta: { noAuth: false }
                },
                {
                  path: 'user-settings',
                  name: 'user-settings',
                  component: UserSettings,
                  meta: { noAuth: false }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/:notFound',
      component: NotFound
    }
  ]
})

router.beforeEach(async (to) => {
  if (useUserStore().userState.user === null && !to.meta.noAuth) {
    return { name: 'home' }
  }
})

export default router
