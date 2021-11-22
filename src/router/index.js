import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/where-to-go',
    name: 'Map',
    component: () => import('../views/Map.vue')
  },
  {
    path: '/station',
    name: 'Station',
    component: () => import('../views/Station.vue')
  },
  {
    path: '/route',
    name: 'Route',
    component: () => import('../views/Route.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
