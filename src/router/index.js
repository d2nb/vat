import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Dashboard from '@/views/dashboard/index.vue'
import Signin from '@/views/auth/sign-in.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: Signin
    }
  ]
})

export default router
