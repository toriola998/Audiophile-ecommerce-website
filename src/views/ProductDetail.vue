<template>
    <Header />
    <div class="product-details">
        <a href="" class="back">Go back</a>
        <div class="hero-wrap flex">
             <img src="" alt="product" class="hero-product"/>
        </div>
       
        <p class="new">NEW PRODUCT</p>
        <h3>XX99 MARK II HEADPHONES</h3>
        <p class="about-product">The new XX99 Mark II headphones is the pinnacle of pristine audio. It 
        redefines your premium headphone experience by reproducing the balanced depth and
        precision of studio-quality sound.</p>
        <p class="price">$ 2,999</p>
        <div class="flex">
            <AddToCartButton/>
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
        display: block;
        margin: 1rem 0;
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

    .new {
        color: #D87D4A;
        letter-spacing: 5px;
        font-size: .9rem;
    }

    h3 { font-size: 1.7rem;
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
</style>