<template>
    <Header />
    <h2 class="flex">HEADPHONES</h2>

    <div class="wrapper">
    <img src="" alt="headphone"/>
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
import OrangeButton from './../components/OrangeButton.vue'
import Products from './../components/Products.vue'
import About from './../components/About.vue'
import Footer from './../components/Footer.vue'
export default {
    name: 'Headphones',
    components:  {
        Header,
        OrangeButton,
        Products,
        About,
        Footer
    }
}
</script>

<style scoped >
    h2 {
        background-color: #191919;
        justify-content: center;
        height: 5rem;
        color: #fff;
        letter-spacing: 3px;
        font-size: 1.4rem;
    }

    .wrapper {
        padding: 6rem 1.5rem;
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