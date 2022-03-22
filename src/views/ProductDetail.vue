<template>
    <header>
        <Header />
        <section class="product-details">
            <a href="" class="back">Go back</a>
            <div class="flex-tab" v-for="item in products" :key="item.id">
                <!--<div class="hero-wrap flex">-->
                <img src="" alt="product" class="hero-product"/>
                <!--</div>-->
                <div> 
                    <p class="new">NEW PRODUCT</p>
                    <h3>{{ item.name }}</h3>
                    <p class="about-product">The new XX99 Mark II headphones is the pinnacle of pristine audio. It 
                    redefines your premium headphone experience by reproducing the balanced depth and
                    precision of studio-quality sound.</p>
                    <p class="price">$ 2,999</p>

                    <div class="flex">
                        <AddToCartButton/>
                        <OrangeButton btnAction="ADD TO CART"/>
                    </div> 
                </div>  
            </div>
            
            <div class="features-wrap">  
                <div class="product-features">
                    <h3>FEATURES</h3>
                    <p class="about-product">Featuring a genuine leather head strap and premium earcups, these 
                    headphones deliver superior comfort for those who like to enjoy endless listening. It 
                    includes intuitive controls designed for any situation. Whether you're taking a business call 
                    or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.</p>
                    
                    <p class="about-product">The advanced Active Noise Cancellation with built-in equalizer allow 
                    you to experience your audio world on your terms. It lets you enjoy your audio in peace, but 
                    quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant 
                    connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, 
                    cutting-edge technology, and a modern design aesthetic.</p>  
                </div>
                <div class="details-wrap"> 
                    <h3>IN THE BOX</h3>
                    <ul class="box-details">
                        <li>
                            <span class="num">1x</span>
                            <span class="details">Headphone Unit</span></li>
                        <li>
                            <span class="num">2x</span>
                            <span class="details">Replacement Earcups</span></li>
                        <li>
                            <span class="num">1x</span>
                            <span class="details">User Manual</span></li>
                        <li>
                            <span class="num">1x</span>
                            <span class="details">3.5mm 5m Audio Cable</span></li>
                        <li>
                            <span class="num">1x</span>
                            <span class="details">Travel Bag</span></li>
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
        </section>
    </header>
    <main>
        <YouMayAlsoLike />
        <SimilarProducts />
        <About />
    </main>
    <Footer />
</template>

<script>
import data from './../../data.json'
import Header from './../components/Header.vue'
import AddToCartButton from './../components/AddToCartButton.vue'
import OrangeButton from './../components/OrangeButton.vue'
import YouMayAlsoLike from './../components/YouMayAlsoLike.vue'
import SimilarProducts from './../components/SimilarProducts.vue'
import About from './../components/About.vue'
import Footer from './../components/Footer.vue'
export default {
    name: 'ProductDetail',
    components: {
        Header,
        OrangeButton,
        AddToCartButton,
        YouMayAlsoLike,
        SimilarProducts,
        About,
        Footer
    },
    data() {
        return {
            products: [],
            productId: this.$route.params.productId
        }
    },
    methods: {
         getProducts() {
             this.products = data
             console.log(this.products)
         }     
    },
    computed: {
        productDetails() {
            return this.products.find( (item) => {
                item.id === this.productId
            })
        }
    },
    created() {
        this.getProducts()
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

    /*.hero-wrap {
        background-color: #f1f1f1; 
        justify-content: center;
        width: 100%;
        margin: 0 auto 1.5rem;
        padding: 3rem 0;
        border-radius: 7px;
    }*/

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