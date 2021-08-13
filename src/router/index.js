import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import purchase from '../views/purchase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: purchase
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active'
})

export default router
