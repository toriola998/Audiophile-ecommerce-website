<template>
    <NavBar />
    <header role="banner">
        <div class="product-details">
            <router-link to="/" class="back">
                Go back
            </router-link>
            <div class="flex-tab">
                <picture>
                    <source media="(min-width: 1000px)" 
                                :srcset="require(`@/assets/${productDetails.image.desktop}`)">
                        <source media="(min-width: 630px)" 
                                :srcset="require(`@/assets/${productDetails.image.tablet}`)">
                        <img :src="require(`@/assets/${productDetails.image.mobile}`)"
                                :alt="productDetails.name"
                                class="hero-product">
                </picture>
                <div> 
                    <p class="new">NEW PRODUCT</p>
                    <h3 class="name-product">{{ productDetails.name}}</h3>
                    <p class="about-product"> {{productDetails.description}} </p>
                    <p class="price">$ {{productDetails.price}}</p>

                    <div class="flex">
                        <AddToCartButton/>
                        <OrangeButton btnAction="ADD TO CART" />
                    </div> 
                </div>  
            </div>
        </div>
    </header> 
    <main role="main"> 
        <div>   
            <div class="features-wrap">  
                <div class="product-features">
                    <h3>FEATURES</h3>
                    <p class="about-product">{{ productDetails.features}}</p> 
                </div>
                <div class="details-wrap"> 
                    <h3>IN THE BOX</h3>
                    <div>
                        <ul class="box-details" v-for="info in productDetails.includes" :key="info.id">
                            <li>
                                <span class="num">{{info.quantity}}x</span>
                                <span class="details">{{info.item}}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <!--<div class="product-images">
                <div>
                    <picture>
                        <source media="(min-width: 1000px)" 
                                :srcset="require(`@/assets/${productDetails.gallery.first.desktop}`)">
                        <source media="(min-width: 630px)" 
                                :srcset="require(`@/assets/${productDetails.gallery.first.tablet}`)">
                        <img :src="require(`@/assets/${productDetails.gallery.first.mobile}`)">        
                    </picture>
                    <picture>
                        <source media="(min-width: 1000px)" 
                                :srcset="require(`@/assets/${productDetails.gallery.second.desktop}`)">
                        <source media="(min-width: 630px)" 
                                :srcset="require(`@/assets/${productDetails.gallery.second.tablet}`)">
                        <img :src="require(`@/assets/${productDetails.gallery.second.mobile}`)">
                    </picture>
                </div>
                <picture>
                    <source media="(min-width: 1000px)" 
                            :srcset="require(`@/assets/${productDetails.gallery.third.desktop}`)">
                    <source media="(min-width: 630px)" 
                            :srcset="require(`@/assets/${productDetails.gallery.third.tablet}`)">
                    <img :src="require(`@/assets/${productDetails.gallery.third.mobile}`)">
                </picture>
            </div>-->
            <h3 class="you-may-also-like">YOU MAY ALSO LIKE</h3>
            <div class="similar-products-wrap">
                <div class="similar-products" v-for="similarProduct in productDetails.others" :key="similarProduct.slug">
                    <picture>
                        <source media="(min-width: 1000px)" 
                                :srcset="require(`@/assets/${similarProduct.image.desktop}`)">
                        <source media="(min-width: 700px)" 
                                :srcset="require(`@/assets/${similarProduct.image.tablet}`)">
                        <img :src="require(`@/assets/${similarProduct.image.mobile}`)"
                            :alt="similarProduct.slug">
                    </picture>
                    <h4 class="similar-product-name"> {{similarProduct.name}}</h4>
                    <OrangeButton btnAction="SEE PRODUCT"/>
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
import AddToCartButton from './../components/AddToCartButton.vue'
import OrangeButton from './../components/OrangeButton.vue'
import ProductsMenu from './../components/ProductsMenu.vue'
import AboutUs from '../components/AboutUs.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
    name: 'ProductDetail',
    components: {
        NavBar,
        OrangeButton,
        AddToCartButton,
        ProductsMenu,
        AboutUs,
        TheFooter
    },

    data() {
        return {
            products: data,
        }
    },

    computed: {
        productId() {
            return this.$route.params.productId
        },

        productDetails() {
            return this.products.find( (item) => {
                    return item.id === parseInt(this.productId)
            })
        },
    } 
}
</script>

<style scoped>
    header,
    main > div{
        padding: 0 1.5rem;
    }

    .back {
        color: #000;
        font-size: 1rem;
        opacity: 0.5;
        display: block;
        margin: 1rem 0;
    }

    .hero-product {
        display: block;
        margin: 0 auto 1.5rem;
        height: auto;
        width: 100%;
        border-radius: 7px ;
    }

    .new {
        color: #D87D4A;
        letter-spacing: 5px;
        font-size: .9rem;
    }

    .name-product {
        text-transform: uppercase;
    }

    h3 { 
        font-size: 1.7rem;
        margin: 1.5rem 0;
        width: 320px;
    }

    .price {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .about-product {
        color: #000;
        opacity: 0.5;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

/***********STYLES FOR FEATURES SECTION STARTS************* */
    .box-details li .num{
        color: #D87D4A;
        padding-right: 1rem;
        font-weight: 700;
    }

    .box-details li .details{
        color: #000;
        opacity: 0.7;
    }

    .box-details li {
        margin-bottom: .8rem;
    }

    .product-images {
        padding: 4rem 0;
    }

    .product-images img {
        border-radius: 7px;
        height: auto;
        width: 100%;
        margin-bottom: 1rem;
    }

    .product-features {
       padding: 2rem 0;
   }

/*************SIMILAR PRODUCTS STYLES STARTS************/
    .similar-products-wrap {
        padding-bottom: 4rem ;
    }

    .similar-products {
        margin-bottom: 3rem;
    }

    .you-may-also-like,
    .similar-product-name {
        text-align: center;
        font-size: 1.5rem;
    }

    .you-may-also-like {
        margin: 4rem 0 2rem;
    }

    .similar-products img {
        height: auto;
        width: 100%;
        display: block;
        margin: auto;
        border-radius: 7px ;
    }

    .similar-product-name {
        margin: 1.5rem 0;
    }

@media screen and (min-width: 520px) {
   .details-wrap h3 {
       margin: initial;
   }

    header,
    main > div{
        padding: 0 4rem;
    }
}

@media screen and (min-width: 630px) {
   .flex-tab {
       display: grid;
       grid-template-columns: 45% 50%;
       justify-content: center;
       align-items: center;
       column-gap: 2rem;
   }
}

@media screen and (min-width: 700px) {
    header,
    main > div{
        padding: 0 2rem;
    }

    .product-images {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .product-images img {
        width: unset;
    }

    .details-wrap,
    .similar-products-wrap {
         display: grid;
    }

    .details-wrap {
        grid-template-columns: auto auto ;
    }

    .you-may-also-like {
        width: initial;
        margin: initial;
        padding: 4rem 0 2rem;
    }

    .similar-products-wrap {
        grid-template-columns: auto auto auto;
        column-gap: 2rem;
    }
}

@media screen and (min-width: 1000px) {
    header,
    main > div{
        padding: 0 6rem;
    }
}

@media screen and (min-width: 1200px) {
    .flex-tab {
       grid-template-columns: 45% 47%;
       column-gap: 6rem;
       padding: 6rem 0;
   }

    header,
    main > div{
        padding: 0 10rem;
    }
  
   .product-features {
       padding: initial;
   }

   .details-wrap {
       display: initial;
   }

   .details-wrap h3,
   .features-wrap h3 {
       margin: 0 0 2rem 0;
   }

    .features-wrap {
        display: grid;
        grid-template-columns: 55% auto;
        align-items: baseline;
        column-gap: 10rem;
    }
}
</style>