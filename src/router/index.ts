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

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: MainPageVue
        },
        {
          path: 'sign-in',
          name: 'sign-in',
          component: SignInPageVue
        },
        {
          path: 'sign-up',
          name: 'sign-up',
          component: SignUpPageVue
        },
        {
          path: 'recover-password',
          name: 'recover-password',
          component: RecoverPasswordPage
        },
        {
          path: 'wallet',
          name: 'wallet',
          component: WalletPageVue,
          children: [
            {
              path: 'widgets',
              name: 'widgets',
              component: Widgets,
              children: [
                {
                  path: '',
                  name: 'default-widgets',
                  component: DefaultWidgets
                },

                {
                  path: 'operation-details/:operationId',
                  name: 'operation-details',
                  component: OperationDetails
                },

                {
                  path: 'correct-balance',
                  name: 'correct-balance',
                  component: CorrectBalance
                },
                {
                  path: 'add-credit-card',
                  name: 'add-credit-card',
                  component: AddCreditCard
                },
                {
                  path: 'operation-history',
                  name: 'operation-history',
                  component: TransactionHistory
                },
                {
                  path: 'user-settings',
                  name: 'user-settings',
                  component: UserSettings
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

export default router
