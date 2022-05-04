<template>
    <div class="nav-wrap">
        <div class="flex">
            <div class="reverse-flex">
                <nav>
                    <button @click="showNav = !showNav"  class="menu">
                        <img src="./../assets/icons/hamburger.svg" alt="Hamburger menu"/>
                    </button>
                    <teleport to="body">
                        <div class="nav-overlay" v-show="showNav" @click="showNav = !showNav"> </div>
                            <ProductsMenu v-show="showNav"
                                id="menu"
                                class="mobile-navigation"/> 
                    </teleport>
                    <ul>
                        <li>
                            <router-link to="/">HOME</router-link></li>
                        <li>
                            <router-link to="/headphones">HEADPHONES</router-link></li>
                        <li>
                            <router-link to="/speakers">SPEAKERS</router-link></li>
                        <li>
                            <router-link to="/earphones">EARPHONES</router-link></li>
                    </ul>
                </nav>
                <router-link to="/">
                    <img src="./../assets/icons/logo.svg" alt="Audiophile - Home"/>
                </router-link>
            </div>
            <button @click="showCart = !showCart">
                <p class="cart flex">{{ cartSize }}</p>
                <img src="./../assets/icons/cart.svg" alt="Cart for products"/>
            </button>

            <teleport to="body">
                <div v-show="showCart"
                    @click.self.stop.prevent ="showCart = !showCart"
                    class="modal-overlay">
                    <CartDetails v-show="showCart"/>
                 </div>
            </teleport>
        </div> 
    </div> 
</template>

<script>
import ProductsMenu from './ProductsMenu.vue'
import CartDetails from '../components/CartDetails.vue'
export default {
    name: 'NavBar',
    data () {
        return {
            showNav: false,
            showCart: false,
        }
    },
    components: {
        ProductsMenu,
        CartDetails,
    },
    computed: {
        cartSize() {
            return this.$store.getters.cartSize;
        }
    }
}
</script>

<style scoped>
    .nav-wrap{
        background-color: #191919;
        padding: 0 1.2rem;
    }

    .nav-overlay {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100vw;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0, 0.55);
    }

     .mobile-navigation {
        position: absolute;
        z-index: 99999;
        background-color: #fff;
        right: 0;
        left: 0;
        top: 5rem;
        padding-bottom: 2rem;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .nav-wrap > .flex {
        justify-content: space-between;
        height: 5rem;
        border-bottom: 1px solid #979797;
    }

    button {
        background-color: transparent;
        border: 0;
    }

    .reverse-flex {
        display: flex;
        justify-content: space-between;
        width: 70%;
    }

    ul {
        display: none;
    }

    .cart {
        background-color: #D87D4A;
        justify-content: center;
        color: #fff;
        height: 1.5rem;
        border-radius: 20px;
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        width: 1.5rem;
    }

    @media screen and (min-width: 700px) {
        .menu {
            display: none;
        }

        ul{
            display: flex;
        }

        .reverse-flex {
            flex-direction: row-reverse;
            width: 80%;
        }

        ul li {
            padding: 0 .5rem;
        }

        ul li a {
            color: #fff;
            font-size: .9rem;
        }

        ul li a:hover {
            color: #D87D4A;
        }
    }

    @media screen and (min-width: 1000px) {
        .nav-wrap{
            padding: 0 4rem;
        }

        .reverse-flex {
            width: 70%;
        }

         ul li {
            padding: 0 1rem;
        }

        .cart {
            right: 3rem;
        }
    }

    @media screen and (min-width: 1200px) {
         .reverse-flex {
            width: 70%;
        }

        .nav-wrap {
            padding: 0 10rem;
        }

        .nav-wrap > .flex {
            height: 7rem;
        }

         .cart {
            right: 9rem;
            top: 1.3rem;
        }
    }
</style>