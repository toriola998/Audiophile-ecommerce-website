<template>
    <Header />
    <div class="product-details">
        <a href="" class="back">Go back</a>
        <div class="hero-wrap flex">
             <img src="" alt="product" class="hero-product"/>
        </div>
       
        <p>NEW PRODUCT</p>
        <h3>XX99 Mark II Headphones</h3>
        <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It 
        redefines your premium headphone experience by reproducing the balanced depth and
        precision of studio-quality sound.</p>
        <p>$ 2,999</p>
        <div class="flex">
            <AddToCartButton />
            <OrangeButton btnAction="ADD TO CART"/>
        </div> 
        <h3>FEATURES</h3>
        <p></p>
        <h3>IN THE BOX</h3>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
import Header from './../components/Header.vue'
import AddToCartButton from './../components/AddToCartButton.vue'
import OrangeButton from './../components/OrangeButton.vue'
export default {
    name: 'ProductDetail',
    components: {
        Header,
        OrangeButton,
        AddToCartButton
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
        margin: 2rem 0 1rem;
    }

    .hero-wrap {
        background-color: #f1f1f1; 
        justify-content: center;
        width: 100%;
        margin: 0 auto 1.5rem;
        padding: 3rem 0;
        border-radius: 7px;
    }

    .hero-product {
        display: block;
        margin: auto;
        height: auto;
        width: 80%;
    }
</style>