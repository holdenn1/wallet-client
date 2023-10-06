import MainPageVue from '@/pages/MainPage.vue'
import SignInPageVue from '@/pages/SignInPage.vue'
import SignUpPageVue from '@/pages/SignUpPage.vue'
import WalletPageVue from '@/pages/WalletPage.vue'
import RecoverPasswordPage from '@/pages/RecoverPasswordPage.vue'
import DefaultWidgets from 'components/widgets/widget-panel/DefaultWidgets.vue'
import Categories from 'components/widgets/widget-panel/Categories.vue'
import SettingsOperation from 'components/widgets/widget-panel/SettingsOperation.vue'
import SelectAnAccount from 'components/widgets/widget-panel/SelectAnAccount.vue'
import OperationDetails from 'components/widgets/widget-panel/OperationDetails.vue'
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
                  path: 'categories',
                  name: 'categories',
                  component: Categories
                },
                {
                  path: 'setting-operation',
                  name: 'setting-operation',
                  component: SettingsOperation
                },
                {
                  path: 'select-account',
                  name: 'select-account',
                  component: SelectAnAccount
                },
                {
                  path: 'operation-details',
                  name: 'operation-details',
                  component: OperationDetails
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
