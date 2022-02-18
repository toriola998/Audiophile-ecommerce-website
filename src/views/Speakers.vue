<template>
    <Header />
    <ProductHeader product="SPEAKERS" />
    <ProductLayout  productImage="./../assets/headphones/headphone1.svg" 
                    productName="ZX9 SPEAKERS"
                    aboutProduct="Upgrade your sound system with the all new ZX9 active speaker. It’s a 
                    bookshelf speaker system that offers truly wireless 
                    -- creating new possibilities for more pleasing and practical audio setups." />

    <ProductLayout  productImage="./../assets/headphones/headphone1.svg" 
                    productName="ZX7 SPEAKERS"
                    aboutProduct="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf
                    speaker uses high-end audiophile components that represents the top of the line powered 
                    speakers for home or studio use." />
                                 
    <Products />
    <About />
    <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import ProductHeader from '../components/ProductHeader.vue'
import OrangeButton from '../components/OrangeButton.vue'
import ProductLayout from '../components/ProductLayout.vue'
import Products from '../components/Products.vue'
import About from '../components/About.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Speakers',
    components:  {
        Header,
        ProductHeader,
        OrangeButton,
        ProductLayout,
        Products,
        About,
        Footer
    }
}
</script>

<style scoped>

</style>