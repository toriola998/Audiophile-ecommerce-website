<template>
    <Header />
    <ProductHeader product="HEADPHONES" />
    <ProductLayout  productImage="./../assets/headphones/headphone1.svg"
                    productName="XX99 MARK II HEADPHONES"
                    aboutProduct="The new XX99 Mark II headphones is the pinnacle of pristine audio.
                    It redefines your premium headphone experience by reproducing the balanced depth 
                    and precision of studio-quality sound." />
    <Products />
    <About />
    <Footer />
</template>

<script>
import Header from './../components/Header.vue'
import ProductHeader from './../components/ProductHeader.vue'
import OrangeButton from './../components/OrangeButton.vue'
import ProductLayout from './../components/ProductLayout.vue'
import Products from './../components/Products.vue'
import About from './../components/About.vue'
import Footer from './../components/Footer.vue'

export default {
    name: 'Headphones',
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

<style scoped >
   
</style>