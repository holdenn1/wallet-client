import AppVue from '@/App.vue'
import MainPageVue from '@/pages/MainPage.vue'
import SignInPageVue from '@/pages/SignInPage.vue'
import SignUpPageVue from '@/pages/SignUpPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppVue,
      children: [
        {
          path: '',
          component: MainPageVue,
          name: 'home'
        },
        {
          path: 'sign-up',
          component: SignUpPageVue,
          name: 'sign-up'
        },
        {
          path: 'sign-in',
          component: SignInPageVue,
          name: 'sign-in'
        }
      ]
    }
  ]
})

export default router
