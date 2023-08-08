import { createRouter, createWebHistory } from 'vue-router'
import ShareList from '../views/ShareList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShareList
    },
    {
      path: '/zhangting',
      name: 'zhangting',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      component: () => import('../views/DailyLimit.vue')
    },
    {
      path: '/dieting',
      name: 'dieting',
      component: () => import('../views/DownLimit.vue')
    },
    {
      path: '/qiangshi',
      name: 'qiangshi',
      component: () => import('../views/StrongList.vue')
    },
    {
      path: '/cixin',
      name: 'cixin',
      component: () => import('../views/SecondNew.vue')
    },
    {
      path: '/zhaban',
      name: 'zhaban',
      component: () => import('../views/FriedBord.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/CompanyDetail.vue')
    },
    {
      path: '/yanbao',
      name: 'yanbao',
      component: () => import('../views/CompanyReport.vue')
    },
    {
      path: '/longhubang',
      name: 'longhubang',
      component: () => import('../views/PersonList.vue')
    }
  ]
})

export default router
