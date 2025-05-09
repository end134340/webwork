import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/views/MainComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainComponent
  },
  {
    path: '/boardList',
    name: 'boardList',
    component: () => import('../views/BoardList.vue'),
  },
  {
    path: '/boardInfo/:no',
    name: 'boardInfo',
    component: () => import('../views/BoardInfo.vue'),
  },
  {
    path: '/boardForm/:no?',
    name: 'boardForm',
    component: () => import('../views/BoardForm.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
