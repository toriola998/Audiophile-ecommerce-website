<template>
    <NavBar />
    <header role="banner">
        <ProductHeader product="SPEAKERS" />
    </header>
    <main role="main">
        <div class="products-container">
            <div v-for="item in products" :key="item.id">  
                <div v-if="item.category === 'speakers'" class="wrap1">
                <picture>
                    <source media="(min-width: 1000px)" 
                                :srcset="require(`@/assets/${item.categoryImage.desktop}`)">
                        <source media="(min-width: 700px)" 
                                :srcset="require(`@/assets/${item.categoryImage.tablet}`)">
                        <img :src="require(`@/assets/${item.categoryImage.mobile}`)"
                                alt="Picture of the YX1 earphone"
                                class="headphone">
                </picture>
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
        <ProductsMenu /> 
        <AboutUs />
    </main>
    <TheFooter />
</template>

<script>
import data from './../data'
import NavBar from '../components/NavBar.vue'
import ProductHeader from './../components/ProductHeader.vue'
import OrangeButton from './../components/OrangeButton.vue'
import ProductsMenu from '../components/ProductsMenu.vue'
import AboutUs from '../components/AboutUs.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
    name: 'Headphones',
    components:  {
        NavBar,
        ProductHeader,
        OrangeButton,
        ProductsMenu,
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

p {
    padding: 0rem 6rem;
}

h2 {
    font-size: 2rem;
}
}

@media screen and (min-width: 1000px) {
.products-container {
    padding: 3rem 6rem 0rem;
}

.wrap1 {
    display: grid;
    justify-content: center;
    align-items: center;
    column-gap: 3rem;
    grid-template-columns: 50% 52%;
}

p {
    padding: unset;
}

h2, 
.button {
    margin: initial;
}

.headphone {
    margin: unset;
}

p, h2 {
    text-align: initial;
}

h2 {
    margin: 1rem 0;
    font-size: 2.2rem;
}

.new {
    margin-bottom: .5rem;
}
}

@media screen and (min-width: 1200px) {
.products-container {
    padding: 6rem 10rem;
}

.wrap1 {
    column-gap: 5rem;
    grid-template-columns: 50% 47%;
}

h2 {
    margin: 1rem 0 2rem;
    font-size: 2.3rem;
}
}
</style>