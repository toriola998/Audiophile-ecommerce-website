<template>
    <div class="modal-container">
        <div class="flex completed-wrap">
            <img src="./../assets/completed.png" alt="Order completed" />
        </div>
        <h1>THANK YOU <br> FOR YOUR ORDER</h1>
        <p class="confirmation">You will receive an email confirmation shortly.</p>
        
        <div class="flex-bg">
            <div class="grey-bg">
            <ul>
                <li class="flex"> 
                    <img src="./../assets/cart/image-zx9-speaker.jpg"  class="product-image" alt=""/>
                    <div class="flex ">
                        <p>
                            <span class="product-name"> {{ cart[0].productName }} </span><br>
                            <span class="product-price"> {{ cart[0].productPrice }} </span>
                        </p>
                        <span class="product-quantity">*1</span>
                    </div>
                </li>
            </ul>
            <p class="other-items">and {{ cartSize - parseInt(1) }} other item(s)</p>
            </div>
            <div class="black-bg flex">
                <div>
                    <p class="grand">GRAND TOTAL</p>
                    <p class="total-price">$ {{ grandTotal }} </p>
                </div>
            </div>
        </div>
        <OrangeButton btnAction="BACK TO HOME" class="back-home" @click="backHome()"/>
    </div>
</template>

<script>
import OrangeButton from './OrangeButton.vue'
export default {
    components: {
        OrangeButton 
    },

    methods: {
        backHome() {
            this.$router.push({ path: '/', name: 'Home' })
        },
    },

    computed: {
        cart() {
            return this.$store.state.cart;
        },

        cartSize() {
            return this.$store.getters.cartSize;
        },

        grandTotal() {
            return this.$store.getters.grandTotal;
        }
    }
}
</script>

<style scoped>
   .modal-container{
        background-color: #fff;
        padding: 2rem 1.5rem;
        border-radius: 7px;
        position: absolute;
        z-index: 999;
        width: 340px;
    }

    h1 {
        line-height: 1;
    }

    .completed-wrap {
        background-color: #D87D4A;
        justify-content: center;
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    .confirmation {
        padding: 1rem 0;
        color: #000;
        opacity: 0.5;
    }

     li > .flex {
       justify-content: space-between;
       width: 100%; 
       margin-left: .5rem;
       align-items: baseline;
    }

    .product-image {
        height: 70px;
    }

    .product-price {
        color: #000;
        opacity: 0.5;
    }

    .product-name,
    .product-price {
         font-weight: 700;
    } 

    .grey-bg {
        background-color: #f1f1f1;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }

    ul li {
        border-bottom: 1px solid #ccc;
        padding: 1rem 1rem 1rem 0;
    }

    .black-bg {
        background-color: #000;
        padding: 1.5rem;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
    }

    .other-items {
        color: #000;
        opacity: 0.5;
        text-align: center;
        font-weight: 700;
        padding: 1rem 0 1.5rem;
    }

    .grand {
        opacity: 0.5;
        font-weight: 500;
    }

    .grand,
    .total-price {
        color: #fff;
    }

    .total-price {
        font-weight: 700;
        padding-top: .5rem;
        font-size: 1.1rem;
    }

    .back-home {
        width: 100%;
        margin-top: 2rem;
    }

    @media screen and (min-width: 520px) {
        .modal-container {
            width: 470px;
        }

        .black-bg {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 7px;
            border-top-right-radius: 7px;
        }

         .grey-bg {
            border-top-left-radius: 7px;
            border-top-right-radius: 0;
            border-bottom-left-radius: 7px;
        }

        .flex-bg {
            display: grid;
            grid-template-columns: auto auto;
        }
    }

    @media screen and (min-width: 520px) {
        .confirmation {
            padding: 1.5rem 0;
        }
    }
</style>