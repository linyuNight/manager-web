import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/Main'),
    redirect: '/manager',
    children: [
      {
        path: '/manager',
        name: 'manager',
        component: () => import('@/views/Main/manager'),
      },
      {
        path: '/second',
        name: 'second',
        component: () => import('@/views/Main/second'),
      }
      ,
      {
        path: '/itemDetail',
        name: 'itemDetail',
        component: () => import('@/views/Main/itemDetail'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
