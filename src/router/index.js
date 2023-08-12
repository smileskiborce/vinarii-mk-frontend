import {createRouter, createWebHistory} from 'vue-router'
import Index from "../Pages/Index.vue";
import DefaultLayout from "../Layouts/DefaultLayout.vue";
import LandingPageWinery from "../Pages/LandingPageWinery.vue"
import Wineries from "../Pages/Wineries.vue"
import ContactUs from "../Pages/ContactUs.vue";

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
            path: '/contact-us',
            name: 'ContactUs',
            component: ContactUs,
            meta: {
                layout: DefaultLayout
            }
        },
    ]
})

export default router
