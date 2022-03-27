<template>
    <div class="cart-container">
        <div class="flex cart-head">
            <p class="cart">CART(3)</p>
            <button class="remove">Remove all</button>
        </div>
        <ul class="product-summary">
            <li class="flex"> 
                <img src="./../assets/cart/image-zx9-speaker.jpg"  class="product-image" alt=""/>
                <div class="flex ">
                    <p>
                        <span class="product-name">XX99 MK II </span><br>
                        <span class="product-price">$ 2,999</span>
                    </p>
                    <AddToCartButton />
                </div>
            </li>

            <li class="flex"> 
                <img src="./../assets/cart/image-zx9-speaker.jpg"  class="product-image" alt=""/>
                <div class="flex ">
                    <p>
                        <span class="product-name">XX99 MK II </span><br>
                        <span class="product-price">$ 2,999</span>
                    </p>
                    <AddToCartButton />
                </div>
            </li>
        </ul>

        <ul>
            <li class="flex total-wrap">
                <span class="title">TOTAL</span>
                <span class="price">$ 2,999</span>
            </li>
        </ul>
        <OrangeButton btnAction="CHECKOUT" class="checkout"/>
    </div>
</template>

<script>
import AddToCartButton from './../components/AddToCartButton.vue'
import OrangeButton from './../components/OrangeButton.vue'
export default {
    components: {
        AddToCartButton,
        OrangeButton
    }
}
</script>

<style scoped>
    .cart-container{
        background-color: #fff;
        padding: 2rem 1.5rem;
        border-radius: 7px;
        width: 25rem;
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
</style>