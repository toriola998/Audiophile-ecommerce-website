<template>
    <NavBar />
    <header role="banner">
        <ProductHeader product="HEADPHONES" />
    </header>
    <main role="main">
        <div class="wrap1">
        <div v-for="item in products" :key="item.id">  
            <div v-if="item.category === 'headphones' ">
               <!-- <picture>
                   <source media="(min-width: 1000px)" 
                            :srcset="item.image.desktop">
                    <source media="(min-width: 700px)" 
                            :srcset="item.image.tablet">-->
                    <img 
                            :src="`./.${item.image.mobile}`"
                            alt="Picture of the YX1 earphone"
                            class="headphone">
               <!-- </picture>-->
                <div class="about-products">
                    <div >
                    <p class="new">NEW PRODUCT</p>
                    <h2>{{ item.name}}</h2>
                    <p>{{item.description}}</p>
                    <OrangeButton :to="{name: 'ProductDetail', params: { productId: item.id },}" btnAction="SEE PRODUCT" class="button"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <AboutUs />
    </main>
    <TheFooter />
</template>

<script>
import data from './../../data'
import NavBar from '../components/NavBar.vue'
import ProductHeader from './../components/ProductHeader.vue'
import OrangeButton from './../components/OrangeButton.vue'
//import ProductLayout from './../components/ProductLayout.vue'
//import ProductsMenu from '../components/ProductsMenu.vue'
import AboutUs from '../components/AboutUs.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
    name: 'Headphones',
    components:  {
        NavBar,
        ProductHeader,
        OrangeButton,
        // ProductLayout,
        //ProductsMenu,
        AboutUs,
        TheFooter
    },

    data() {
        return {
            products: data,
        }
    }
}
</script>

<style scoped>
/*@import './../assets/product-layout.css'; */
    .wrap1 {
        padding: 0 1.5rem 6rem;
    }

    .headphone {
        display: block;
        margin: auto;
        width: 100%;
        height: auto;
        border-radius: 7px;
    }
 
    p, h2 {
        text-align: center;
    }

    .new {
        color: #D87D4A;
        letter-spacing: 5px;
        font-size: .9rem;
        margin: 1rem 0;
    }

    h2 {
        font-size: 1.7rem;
        margin: 1.5rem auto;
        width: 320px;
        line-height: 1;
    }

    p {
        color: #000;
        opacity: 0.8;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

@media screen and (min-width: 520px) {
    .headphone {
        width: 70%;
    }
}

@media screen and (min-width: 700px) {
    .headphone {
        width: 100%;
    }

    h2 {
        font-size: 2rem;
    }

    p {
        padding: 0 7rem;
    }
}

@media screen and (min-width: 1000px) {
    .wrap1 {
        display: grid;
        grid-template-columns: 50% auto;
        align-items: center;
        padding: 6rem 6rem;
    }

    h2 {
        margin: 1rem 0;
        font-size: 2.2rem;
    }

    .about-products {
        margin-left: 4rem;
    }

    p {
        padding: unset;
    }

    p, h2 {
        text-align: initial;
    }

    h2, .button {
        margin: initial;
    }

    .new {
        margin-bottom: .5rem;
    }

    h2 {
        margin-bottom: 1rem;  
    }
}

@media screen and (min-width: 1200px) {
    .wrap1 {
        padding: 6rem 10rem;
    }

     h2 {
        margin: 1rem 0 2rem;
        font-size: 2.2rem;
    }
}
</style>