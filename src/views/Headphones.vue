<template>
    <header>
        <NavBar />
        <ProductHeader product="HEADPHONES" />
    </header>
    <main>
        <ProductLayout imageFileName="product2-headphones"
                    productName="XX99 MARK II HEADPHONES"
                    aboutProduct="The new XX99 Mark II headphones is the pinnacle of pristine audio.
                    It redefines your premium headphone experience by reproducing the balanced depth 
                    and precision of studio-quality sound." />

        <ProductLayout imageFileName="product-mark-one-headphones"
                        productName="XX99 MARK I HEADPHONES"
                        aboutProduct="As the gold standard for headphones, the classic XX99 Mark I offers 
                        detailed and accurate audio reproduction for audiophiles,
                        mixing engineers, and music aficionados alike in studios and on the go."
                        class="reverse-flex" />
                    
        <ProductLayout imageFileName="product-headphones"
                        productName="XX59 HEADPHONES"
                        aboutProduct="Enjoy your audio almost anywhere and customize it to your specific 
                        tastes with the XX59 headphones. The stylish yet durable versatile wireless headset
                        is a brilliant companion at home or on the move." />              
        <ProductsMenu />
        <About />
    </main>
    <Footer />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductHeader from './../components/ProductHeader.vue'
//import OrangeButton from './../components/OrangeButton.vue'
import ProductLayout from './../components/ProductLayout.vue'
import ProductsMenu from '../components/ProductsMenu.vue'
import About from './../components/About.vue'
import Footer from './../components/Footer.vue'

export default {
    name: 'Headphones',
    components:  {
        NavBar,
        ProductHeader,
       // OrangeButton,
        ProductLayout,
        ProductsMenu,
        About,
        Footer
    }
}
</script>

<style scoped >
</style>