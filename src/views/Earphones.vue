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
        <AboutUs />
    </main>
    <TheFooter />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductHeader from '../components/ProductHeader.vue'
//import OrangeButton from '../components/OrangeButton.vue'
import ProductLayout from '../components/ProductLayout.vue'
import ProductsMenu from '../components/ProductsMenu.vue'
import AboutUs from '../components/AboutUs.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
    name: 'Earphones',
    components:  {
        NavBar,
        ProductHeader,
        //OrangeButton,
        ProductLayout,
        ProductsMenu,
        AboutUs,
        TheFooter
    }
}
</script>

<style scoped>

</style>