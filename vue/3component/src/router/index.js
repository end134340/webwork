import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' //여기에서 import하면 처음에 서버에 요청했을 때 다 내려받아 가져오는거라 초기 로딩이 늦어짐.

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
      component: () => import('../views/AboutView.vue'), //안쪽에서 import하면 필요할 때. 최초 한번 click했을때 불러옴.
    },
    // { 
    //   path: '/nested',
    //   name: 'nested',
    //   component: () => import('../views/NestedComponent.vue'),
    // },
    // { 
    //   path: '/parent',
    //   name: 'parent',
    //   component: () => import('../views/ParentComponent.vue'),
    // },
    // { 
    //   path: '/parent2',
    //   name: 'parent2',
    //   component: () => import('../views/ParentComponent2.vue'),
    // },
    { 
      path: '/emps',
      name: 'emps',
      component: () => import('../views/EmpView.vue'),
    },
    { 
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
    },
    { 
      path: '/slot',
      name: 'slot',
      component: () => import('../views/SlotView.vue'),
    },
    { 
      path: '/slot',
      name: 'slot',
      component: () => import('../views/SlotView.vue'),
    },
  ],
})

export default router
