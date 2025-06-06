import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //lazy-loaded한 건 처음에 안 내려받고 여기에 있는 링크를 클릭하면...다운받음.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/boardList',
      name: 'boardList',
      component: () => import('../views/BoardList.vue'),
    },
    {
      path: '/boardInfo/:id',
      name: 'boardInfo',
      component: () => import('../views/BoardInfo.vue'),
    },
    {
      path: '/boardForm/:id?',
      name: 'boardForm',
      component: () => import('../views/BoardForm.vue'),
    },
    {
      path: '/customerList',
      name: 'customerList',
      component: () => import('../views/CustomerList.vue'),
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/boardTable',
      name: 'boardTable',
      component: () => import('../views/BoardTable.vue'),
    },
  ],
})

export default router
