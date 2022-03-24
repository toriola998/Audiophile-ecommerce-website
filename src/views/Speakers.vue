<template>
    <NavBar />
    <header>
        <ProductHeader product="SPEAKERS" />
    </header>
    <main>
        <ProductLayout imageFileName="product-speaker" 
                        productName="ZX9 SPEAKERS"
                        aboutProduct="Upgrade your sound system with the all new ZX9 active speaker. It’s a 
                        bookshelf speaker system that offers truly wireless 
                        -- creating new possibilities for more pleasing and practical audio setups." />

        <ProductLayout  imageFileName="product-zx9-speaker" 
                        productName="ZX7 SPEAKERS"
                        aboutProduct="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf
                        speaker uses high-end audiophile components that represents the top of the line powered 
                        speakers for home or studio use."
                        class="reverse-flex" />
                                 
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
    name: 'Speakers',
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