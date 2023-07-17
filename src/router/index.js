import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import Wine from "../pages/Wine.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";

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
      path: '/wine',
      name: 'Wine',
      component: Wine,
        meta:{
        }
    }
  ]
})

export default router
