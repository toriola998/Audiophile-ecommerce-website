<template>
    <div class="cart-container">
        <p v-if="cartSize === 0" class="empty-cart-msg">Oops! Your cart is empty</p>
        <div v-else>
            <div class="flex cart-head">
                <p class="cart">CART ({{ cartSize }})</p>
                <!--SHOW BUTTON ONLY WHEN THERE'S PRODUCT IN THE CART-->
                <button class="remove"  
                        @click="emptyCart()">
                        Remove all
                </button>
            </div>

            <ul class="product-summary">
                <li class="flex" v-for="cartItem in cart" :key="cartItem"> 
                    <img :src="cartItem.productImage"  class="product-image" alt=""/>
                    <div class="flex ">
                        <p>
                            <span class="product-name">{{ cartItem.productName.substring(0, 9) }}...</span><br>
                            <span class="product-price">{{ cartItem.productPrice }}</span>
                        </p>
                        <AddToCartButton />
                    </div>
                </li>
            </ul>
            <ul>
                <li class="flex total-wrap">
                    <span class="title">TOTAL</span>
                    <span class="price">$ {{ cartTotalAmount }}</span>
                </li>
            </ul>
            <OrangeButton btnAction="CHECKOUT" 
                        class="checkout" 
                        @click="checkout()" />
        </div>
    </div>
</template>

<script>
import AddToCartButton from './../components/AddToCartButton.vue'
import OrangeButton from './../components/OrangeButton.vue'
export default {
    components: {
        AddToCartButton,
        OrangeButton
    },

    methods: {
        checkout() {
            if(this.cartSize > 0){
                this.$router.push({ path: '/checkout' })
                document.querySelector('.cart-container').parentElement.style.display = 'none'
            }
        },

        emptyCart(){
            this.$store.state.cart = [] 
        },

    },

    computed: {
        cartSize() {
            return this.$store.getters.cartSize
        },

        cart() {
            return this.$store.state.cart
        },

        cartTotalAmount() {
            return this.$store.getters.cartTotalAmount
        },
    },

}
</script>

<style scoped>
    .cart-container{
        background-color: #fff;
        padding: 2rem 1.5rem;
        border-radius: 7px;
        width: 90%;
        min-height: 220px;
        position: absolute;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .empty-cart-msg {
        font-weight: 600;
    }

    .cart,
    .price,
    .product-name {
        font-weight: 700;
    }

    .remove {
        font-weight: 500;
        color: #000;
        opacity: 0.5;
        font-size: .9rem;
    }

    .remove:hover {
        color: #D87D4A;
    }

    .product-summary li{
        margin-bottom: 1.3rem;
    }

    .product-image {
        height: 4rem;
        width: 4rem;
        border-radius: 5px;
    }

    .product-name {
        padding-bottom: .4rem;
    }

    ul div {
        width: 100%;
        justify-content: space-between;
        margin-left: 1.3rem;
    }

    .cart-head {
        margin-bottom: 1.5rem;
        justify-content: space-between;
    }

    .total-wrap{
        justify-content: space-between;
        margin: 1.5rem 0;
    }

    .price {
        font-size: 1.2rem;
    }

    .title {
        font-size: 500;
        color: #000;
        opacity: 0.5;
    }

    .grand {
        margin-top: 1.5rem;
    }

    .checkout {
        width: 100%;
    }

    
    @media screen and (min-width: 700px) {
        .cart-container {
            right: 1rem;
            top: 7rem;
            width: 45%;
            min-height: 270px;
        }
    }

    @media screen and (min-width: 1000px) {
        .cart-container {
            width: 38%;
        }
    }

     @media screen and (min-width: 1200px) {
        .cart-container {
            right: 10rem;
            top: 10rem;
            width: 27%;
        }
    }
</style>