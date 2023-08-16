import {createRouter, createWebHistory} from 'vue-router'
import Index from "../Pages/Index.vue";
import DefaultLayout from "../Layouts/DefaultLayout.vue";
import Wineries from "../Pages/Wineries.vue"
import AboutUs from "../Pages/About-us.vue";
import ContactUs from "../Pages/ContactUs.vue";
import wineryPage from "../Pages/WineryPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
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
            path: '/wineries/:id',
            name: 'winery',
            component: wineryPage,
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
