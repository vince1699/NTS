import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newcomers',
    name: 'Newcomers',

    component: () => import('../views/Newcomers.vue')
  },
  {
    path: '/tasks',
    name: 'Tasks',

    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profil.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
