<template>
    <Header />
    <ProductHeader productName="HEADPHONES"/>

   
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
   
</style>