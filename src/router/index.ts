import MainPageVue from '@/pages/MainPage.vue'
import SignInPageVue from '@/pages/SignInPage.vue'
import SignUpPageVue from '@/pages/SignUpPage.vue'
import WalletPageVue from '@/pages/WalletPage.vue'
import MainLayout from 'components/Layout/MainLayout.vue'
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
          path: 'wallet',
          name: 'wallet',
          component: WalletPageVue
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
