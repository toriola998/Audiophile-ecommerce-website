<template>
    <Header />
    <ProductHeader productName="HEADPHONES"/>

    <div class="wrap1">
        <img src="./../assets/" alt="headphone"/>
        <p class="new">NEW PRODUCT</p>
        <h3>XX99 MARK II <br>
            HEADPHONES</h3>
        <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines
        your premium headphone experience by reproducing the balanced depth and precision of 
        studio-quality sound.</p>
        <OrangeButton btnAction="SEE PRODUCT"/>
    </div>
    <Products />
    <About />
    <Footer />
</template>

<script>
import Header from './../components/Header.vue'
import ProductHeader from './../components/ProductHeader.vue'
import OrangeButton from './../components/OrangeButton.vue'
import Products from './../components/Products.vue'
import About from './../components/About.vue'
import Footer from './../components/Footer.vue'

export default {
    name: 'Headphones',
    components:  {
        Header,
        ProductHeader,
        OrangeButton,
        Products,
        About,
        Footer
    }
}
</script>

<style scoped >
    .wrap1 {
        padding: 0 1.5rem 6rem;
    }

    p, h3 {
        text-align: center;
    }

    .new {
        color: #D87D4A;
        letter-spacing: 5px;
        font-size: .9rem;
    }

    h3 {
        font-size: 1.7rem;
        margin: 1.5rem 0;
    }

    p {
        color: #000;
        opacity: 0.5;
        line-height: 1.6;
        margin-bottom: 2rem;
    }
</style>