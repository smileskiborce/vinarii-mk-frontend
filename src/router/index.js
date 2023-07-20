import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Winery from "../pages/Winery.vue";
import Index from "../pages/Index.vue";
import Wineries from "../pages/Wineries.vue";

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
