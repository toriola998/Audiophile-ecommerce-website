import {createRouter, createWebHistory} from 'vue-router'

import Home from './../views/Home.vue'
import Headphones from './../views/Headphones.vue'
import Speakers from './../views/Speakers.vue'
import Earphones from './../views/Earphones.vue'
import ProductDetail from './../views/ProductDetail.vue'
import Checkout from './../viewsCheckout.vue'

const router = createRouter({
    history:  createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/headphones',
        name: 'Headphones',
        component: Headphones
     },

     {
        path: '/speakers',
        name: 'Speakers',
        component: Speakers
     },

     {
        path: '/earphones',
        name: 'Earphones',
        component: Earphones
     },

     {
        path: '/product-detail/:productId',
        name: 'ProductDetail',
        component: ProductDetail
     },

     {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
   }
    ]
})
export default router;

