import { createRouter, createWebHistory } from'vue-router' 
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ========================
    // Home Page
    // ========================
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // ========================
    // 404 Page
    // ========================
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: () => import('@/views/NotFoundView.vue')
    // }
  ]
})

export default router