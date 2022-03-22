<template>
    <header>
        <Header />
        <ProductHeader product="EARPHONES" />
    </header>
    <main>
        <ProductLayout  productImage="./../assets/headphones/headphone1.svg" 
                    productName="YX1 WIRELESS EARPHONES"
                    aboutProduct="Tailor your listening experience with bespoke dynamic drivers 
                    from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
                    even in noisy environments with its active noise cancellation feature." />                             
        <Products />
        <About />
    </main>
    <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import ProductHeader from '../components/ProductHeader.vue'
//import OrangeButton from '../components/OrangeButton.vue'
import ProductLayout from '../components/ProductLayout.vue'
import Products from '../components/Products.vue'
import About from '../components/About.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Earphones',
    components:  {
        Header,
        ProductHeader,
        //OrangeButton,
        ProductLayout,
        Products,
        About,
        Footer
    }
}
</script>

<style scoped>

</style>