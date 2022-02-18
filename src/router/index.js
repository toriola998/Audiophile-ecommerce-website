import {createRouter, createWebHistory} from 'vue-router'

import Home from './../views/Home.vue'
import Headphones from './../views/Headphones.vue'

const router = createRouter({
    history:  createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/Headphones',
        name: 'Headphones',
        component: Headphones
     },

     {
        path: '/Speakers',
        name: 'Speak',
        component: Headphones
     }
    ]
})
export default router;

