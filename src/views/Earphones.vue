<template>
    <header>
        <ProductHeader product="EARPHONES" />
    </header>
    <main>
        <div class="products-container">
            <div v-for="item in products" :key="item.id">  
                <div v-if="item.category === 'earphones'" class="wrap1">
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
                        <p class="new" v-if="item.new == true">NEW PRODUCT</p>
                        <h2 class="earphone-product-name">{{ item.name}}</h2>
                        <p class="desc">{{item.description}}</p>
                        <OrangeButton :to="{name: 'ProductDetail', params: { productSlug: item.slug },}" btnAction="SEE PRODUCT" class="button"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProductsMenu /> 
        <AboutUs />
    </main>
</template>

<script>
import data from './../data'
import ProductHeader from './../components/ProductHeader.vue'
import OrangeButton from './../components/OrangeButton.vue'
import ProductsMenu from '../components/ProductsMenu.vue'
import AboutUs from '../components/AboutUs.vue'

export default {
    name: 'Headphones',
    components:  {
        ProductHeader,
        OrangeButton,
        ProductsMenu,
        AboutUs,
    },

    data() {
        return {
            products: data,
        }
    }
}
</script>

<!--ORDINARY 'import styles' WOULDN'T WORK, IT WASN'T SCOPED,
 KEEPS MESSING WITH OTHER ELEMENTS----------->
<style src="./../assets/product-layout.css" scoped>   
</style>