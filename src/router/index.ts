import MainPageVue from '@/pages/MainPage.vue'
import SignInPageVue from '@/pages/SignInPage.vue'
import SignUpPageVue from '@/pages/SignUpPage.vue'
import WalletPageVue from '@/pages/WalletPage.vue'
import RecoverPasswordPage from '@/pages/RecoverPasswordPage.vue'
import MainLayout from 'components/Layouts/MainLayout.vue'
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
          path: 'recover-password/:userId',
          name: 'recover-password',
          component: RecoverPasswordPage
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
