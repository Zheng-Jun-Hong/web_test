import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test1',
    name: 'test1',
    component: () => import('../pages/test1.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import('../pages/test2.vue')
  },
  {
    path: '/test3',
    name: 'test3',
    component: () => import('../pages/test3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
