import { createRouter, createWebHistory } from 'vue-router'
import MasterLayout from '../components/MasterLayout.vue'
import MainPage from "../components/MainPage.vue";


const routes = [
    {
        path: '/',
        component: MasterLayout,
        children: [
            {
                path: '',
                component: MainPage
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
