import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Winery from "../pages/Winery.vue";

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
      path: '/winery',
      name: 'Winery',
      component: Winery,
        meta:{
        }
    }
  ]
})

export default router
