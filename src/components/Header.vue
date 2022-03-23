<template>
    <div>
        <div class="flex">
            <button 
                    @click="showNav = !showNav">
                <img src="./../assets/icons/hamburger.svg" alt="Hamburger menu"/>
            </button>
            <router-link to="/">
                <img src="./../assets/icons/logo.svg" alt="Audiophile - Home"/>
            </router-link>
            <button>
                <img src="./../assets/icons/cart.svg" alt="Cart for products"/>
            </button>
        </div> 

        <nav>
            <ul><li></li>
            </ul>
        </nav>

        <ProductsMenu v-show="showNav"
                    class="mobile-navigation"/>
    </div> 
</template>

<script>
import ProductsMenu from './../components/ProductsMenu.vue'
export default {
    name: 'TheHeader',
    data () {
        return {
            showNav: false,
        }
    },
    components: {
        ProductsMenu,
    }
}
</script>

<style scoped>
    .flex {
        background-color: #191919;
        padding: 0 1.2rem;
        justify-content: space-between;
        height: 5rem;
        border-bottom: 1px solid #979797;
    }

    button {
        background-color: transparent;
        border: 0;
    }

    .mobile-navigation {
        position: absolute;
        z-index: 99999;
        background-color: #fff;
        right: 0;
        left: 0;
    }

    /*.mobile-navigation::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, 0.4)
    }*/


</style>