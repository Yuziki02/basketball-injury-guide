import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/basketball-injury-guide/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/training',
      name: 'Training',
      component: () => import('../views/Training.vue'),
      meta: { title: '训练计划' }
    },
    {
      path: '/nutrition',
      name: 'Nutrition',
      component: () => import('../views/Nutrition.vue'),
      meta: { title: '营养指导' }
    },
    {
      path: '/community',
      name: 'Community',
      component: () => import('../views/Community.vue'),
      meta: { title: '社区交流' }
    },
    {
      path: '/nba-cases',
      name: 'NbaCases',
      component: () => import('../views/NbaCases.vue'),
      meta: { title: 'NBA球员伤病经历' }
    }
  ]
})

export default router 