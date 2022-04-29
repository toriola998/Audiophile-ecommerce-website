<template>
    <NavBar />
    <header role="banner">
        <div class="product-details">
            
            <button class="back" @click="$router.back()">
                Go back
            </button>
            <div class="flex-tab">
                <picture>
                    <source media="(min-width: 1000px)" 
                                :srcset="require(`@/assets/${product.image.desktop}`)">
                        <source media="(min-width: 630px)" 
                                :srcset="require(`@/assets/${product.image.tablet}`)">
                        <img :src="require(`@/assets/${product.image.mobile}`)"
                                :alt="product.name"
                                class="hero-product">
                </picture>
                <div> 
                    <p class="new">NEW PRODUCT</p>
                    <h1 class="name-product">{{ product.name}}</h1>
                    <p class="about-product"> {{product.description}} </p>
                    <p class="price">$ {{product.price}}</p>

                    <div class="flex">
                        <AddToCartButton :productQuantity="productQuantity" 
                                         @increase-quantity="increaseQuantity()"
                                         @decrease-quantity="decreaseQuantity()"/>
                        <OrangeButton btnAction="ADD TO CART" @click="AddToCart()"/>
                    </div> 
                </div>  
            </div>
        </div>
    </header> 
    <main role="main"> 
        <div>   
            <section aria-labelledby="features" class="features-wrap">  
                <div class="product-features">
                    <h2 id="features">FEATURES</h2>
                    <p class="about-product">{{ product.features}}</p> 
                </div>
                <div class="details-wrap"> 
                    <h3>IN THE BOX</h3>
                    <div>
                        <ul class="box-details" v-for="info in product.includes" :key="info.id">
                            <li>
                                <span class="num">{{info.quantity}}x</span>
                                <span class="details">{{info.item}}</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        
            <!--<div class="product-images">
                <div>
                    <picture>
                        <source media="(min-width: 1000px)" 
                                :srcset="require(`@/assets/${product.gallery.first.desktop}`)">
                        <source media="(min-width: 630px)" 
                                :srcset="require(`@/assets/${product.gallery.first.tablet}`)">
                        <img :src="require(`@/assets/${product.gallery.first.mobile}`)">        
                    </picture>
                    <picture>
                        <source media="(min-width: 1000px)" 
                                :srcset="require(`@/assets/${product.gallery.second.desktop}`)">
                        <source media="(min-width: 630px)" 
                                :srcset="require(`@/assets/${product.gallery.second.tablet}`)">
                        <img :src="require(`@/assets/${product.gallery.second.mobile}`)">
                    </picture>
                </div>
                <picture>
                    <source media="(min-width: 1000px)" 
                            :srcset="require(`@/assets/${product.gallery.third.desktop}`)">
                    <source media="(min-width: 630px)" 
                            :srcset="require(`@/assets/${product.gallery.third.tablet}`)">
                    <img :src="require(`@/assets/${product.gallery.third.mobile}`)">
                </picture>
            </div>-->

            <section aria-labelledby="products-you-may-also-like">
                <h2 id="products-you-may-also-like" 
                    class="you-may-also-like">
                    YOU MAY ALSO LIKE
                </h2>
                <div class="similar-products-wrap">
                    <div class="similar-products" v-for="similarProduct in product.others" :key="similarProduct.slug">
                        <picture>
                            <source media="(min-width: 1000px)" 
                                    :srcset="require(`@/assets/${similarProduct.image.desktop}`)">
                            <source media="(min-width: 700px)" 
                                    :srcset="require(`@/assets/${similarProduct.image.tablet}`)">
                            <img :src="require(`@/assets/${similarProduct.image.mobile}`)"
                                :alt="similarProduct.slug">
                        </picture>
                        <h3 class="similar-product-name"> {{similarProduct.name}}</h3>
                        <OrangeButton btnAction="SEE PRODUCT" :to="{name: 'ProductDetail', params: { productSlug: similarProduct.slug },}"/>
                    </div>
                </div>
            </section>
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

    methods: {
        increaseQuantity() {
            this.productQuantity++;
        },

        decreaseQuantity() {
          if(this.productQuantity == 0){
               this.productQuantity = 0
           }else {
              this.productQuantity--;
           }
        },

        AddToCart() {
            const productDetail = {
                productId: this.productId,
                productName: this.product.name,
                productPrice: this.product.price,
                productDescription: this.product.description,
                productImage: this.product.image,
                quantity: this.$store.state.productQuantity
            }
            
            console.log(productDetail)
            console.log(this.$store.state.cart)
            this.$store.commit('addToCart', productDetail)
        }
    },

    computed: {
        productId() {
            return this.$route.params.productId
        },

        productSlug(){
             return this.$route.params.productSlug
        },

        product() {
            return this.products.find( (item) => {
                   // return item.id === parseInt(this.productId)
                   return item.slug == this.productSlug
            })
        },

        productQuantity() {
            return this.$store.getters.productQuantity
        },
    },
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
        opacity: 0.7;
        margin: 2rem 0;
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

    h1 {
        margin: 1rem 0;
    }

    h1, h2, h3 {
        text-transform: uppercase;
    }

    #features {
        margin-bottom: 2rem;
    }

    #features, h3 { 
        font-size: 1.7rem;
        margin: 1.5rem 0;
    }

    .price {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .about-product {
        color: #000;
        opacity: 0.6;
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
       padding: 2rem 0 6rem;
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
   .features-wrap h2 {
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