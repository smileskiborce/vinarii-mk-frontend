import {createRouter, createWebHistory} from 'vue-router'
import Index from "../Pages/Index.vue";
import DefaultLayout from "../Layouts/DefaultLayout.vue";
import LandingPageWinery from "../Pages/LandingPageWinery.vue"
import Wineries from "../Pages/Wineries.vue"
import AboutUs from "../Pages/About-us.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            meta: {
                layout: DefaultLayout
            }
        },
        {
            path: '/winery',
            name: 'Winery',
            component: LandingPageWinery,
            meta: {
                layout: DefaultLayout
            }
        },
        {
            path: '/wineries',
            name: 'Wineries',
            component: Wineries,
            meta: {
                layout: DefaultLayout
            }
        },
        {
            path: '/about-us',
            name: 'About us',
            component: AboutUs,
            meta: {
                layout: DefaultLayout
            }
        },
    ]
})

export default router
