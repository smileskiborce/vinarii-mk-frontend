import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Wineries from "@/pages/Wineries.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
        meta:{
          layout:DefaultLayout
        }
    },{
      path: '/wineries',
      name: 'Wineries',
      component: Wineries,
        meta:{
        }
    }
  ]
})

export default router
