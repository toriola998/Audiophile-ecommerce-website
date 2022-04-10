<template>
    <NavBar />
    <header role="banner">
        <div class="product-details">
            <router-link to="/" class="back">
                Go back
            </router-link>
            <div class="flex-tab">
                <img :src="productDetails.image.mobile" 
                     :alt="product" class="hero-product"/>
                <div> 
                    <p class="new">NEW PRODUCT</p>
                    <h3>{{ productDetails.name}}</h3>
                    <p class="about-product"> {{productDetails.description}} </p>
                    <p class="price">$ {{productDetails.price}}</p>

                    <div class="flex">
                        <AddToCartButton/>
                        <OrangeButton btnAction="ADD TO CART"/>
                    </div> 
                </div>  
            </div>
            
            <div class="features-wrap">  
                <div class="product-features">
                    <h3>FEATURES</h3>
                    <p class="about-product">{{ productDetails.features}}</p> 
                </div>
                <div class="details-wrap"> 
                    <h3>IN THE BOX</h3>
                    <ul class="box-details" v-for="info in productDetails.includes" :key="info.id">
                        <li>
                            <span class="num">{{info.quantity}}x</span>
                            <span class="details">{{info.item}}</span></li>
                    </ul>
                </div>
            </div>
        
            <div class="product-images">
                <div>
                    <img src="./../assets/product2-headphones/mobile/image-gallery-1.jpg" alt="" />
                    <img src="./../assets/product2-headphones/mobile/image-gallery-2.jpg" alt="" />
                </div>
                <img src="./../assets/product2-headphones/mobile/image-gallery-3.jpg" alt="" />
            </div>
        </div>
    </header>
    <main role="main">
        <YouMayAlsoLike />
        <SimilarProducts />
        <AboutUs />
    </main>
    <TheFooter />
</template>

<script>
import data from './../../data'
import NavBar from '../components/NavBar.vue'
import AddToCartButton from './../components/AddToCartButton.vue'
import OrangeButton from './../components/OrangeButton.vue'
import YouMayAlsoLike from './../components/YouMayAlsoLike.vue'
import SimilarProducts from './../components/SimilarProducts.vue'
import AboutUs from '../components/AboutUs.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
    name: 'ProductDetail',
    components: {
        NavBar,
        OrangeButton,
        AddToCartButton,
        YouMayAlsoLike,
        SimilarProducts,
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
    .product-details {
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
        margin: auto;
        height: auto;
        width: 80%;
    }

    .new {
        color: #D87D4A;
        letter-spacing: 5px;
        font-size: .9rem;
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

    .grey-bg {
        margin-right: 1.5rem;
    }

    .link {
        margin: unset;
    }

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

@media screen and (min-width: 520px) {
   .details-wrap {
       display: grid;
       grid-template-columns: 35% 60%;
       justify-content: space-between;
   }

   .details-wrap h3 {
       margin: initial;
   }

   .product-features {
       padding: 4rem 0;
   }
}

@media screen and (min-width: 630px) {
   .flex-tab {
       display: grid;
       grid-template-columns: 35% 60%;
       justify-content: space-between;
   }
}

@media screen and (min-width: 700px) {
    .product-details {
        padding: 0 2rem;
    }

    .product-images {
        display: flex;
    }
}

@media screen and (min-width: 1200px) {
   .features-wrap {
       display: grid;
       grid-template-columns: 60% 40%;
       gap: 130px;
       padding: 4rem 0;
   }

   .product-details {
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
}
</style>