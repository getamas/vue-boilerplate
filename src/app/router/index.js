import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import HomePage from '@/app/views/home.vue'

Vue.use(VueRouter)
Vue.use(VueMeta, { keyName: 'page' })

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: () => import(/* webpackChunkName: "article" */ '@/app/views/article.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

export default router
