import {createRouter, createWebHistory} from 'vue-router'

import Home from './../views/Home.vue'
import Headphones from './../views/Headphones.vue'
import Speakers from './../views/Speakers.vue'
import Earphones from './../views/Earphones.vue'

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
        name: 'Speakers',
        component: Speakers
     },

     {
        path: '/Earphones',
        name: 'Earphones',
        component: Earphones
     }
    ]
})
export default router;

