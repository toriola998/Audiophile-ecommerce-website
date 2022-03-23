<template>
    <header>
        <NavBar />
        <ProductHeader product="EARPHONES" />
    </header>
    <main>
        <ProductLayout  imageFileName="product-earphones" 
                    productName="YX1 WIRELESS EARPHONES"
                    aboutProduct="Tailor your listening experience with bespoke dynamic drivers 
                    from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
                    even in noisy environments with its active noise cancellation feature." />                             
        <ProductsMenu />
        <About />
    </main>
    <Footer />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductHeader from '../components/ProductHeader.vue'
//import OrangeButton from '../components/OrangeButton.vue'
import ProductLayout from '../components/ProductLayout.vue'
import ProductsMenu from '../components/ProductsMenu.vue'
import About from '../components/About.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Earphones',
    components:  {
        NavBar,
        ProductHeader,
        //OrangeButton,
        ProductLayout,
        ProductsMenu,
        About,
        Footer
    }
}
</script>

<style scoped>

</style>