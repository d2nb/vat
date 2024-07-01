import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/home/index.vue'
import Signin from '@/views/auth/sign-in.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
          meta: {
            hideBreadcrumb: true
          }
        },
        {
          path: '/list',
          name: 'list',
          component: () => import('@/views/list/index.vue')
        },
        {
          path: '/form',
          name: 'form',
          component: () => import('@/views/form/index.vue')
        },
        {
          path: '/user',
          name: 'user',
          children: [
            {
              path: 'settings',
              name: 'settings',
              component: () => import('@/views/user/settings/index.vue')
            }
          ]
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
