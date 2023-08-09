import { createRouter, createWebHistory } from 'vue-router'
import Index from "../Pages/Index.vue";
import DefaultLayout from "../Layouts/DefaultLayout.vue";
import Wineries from "@/Pages/Wineries.vue";
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
    },
    {
      path: '/wineries',
      name: 'Wineries',
      component: Wineries,
      meta:{
        layout:DefaultLayout
      }
    },
  ]
})

export default router
