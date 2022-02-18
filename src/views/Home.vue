<template>
    <Header/>

    <div class="head flex">
        <div>
            <p class="new">NEW PRODUCT</p>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p class="note">Experience natural, lifelike audio and exceptional build 
            quality made for the passionate music enthusiast.</p>
            <OrangeButton link="" btnAction="SEE PRODUCT"/>
        </div> 
    </div>

    <Products product="HEADPHONES" productImage="./../assets/Products/product1.svg"/>
    <Products product="SPEAKERS" productImage="./../assets/Products/product2.svg"/>
    <Products product="EARPHONES" productImage="./../assets/Products/product3.svg"/>

    <div class="speaker1-wrap">
        <img src="./../assets/home/mobile/image-speaker-zx9.png" alt="speaker" class="speaker1"/>
        <h2>ZX9 <br>
            SPEAKER</h2>
        <p class="upgrade">Upgrade to premium speakers that are phenomenally built 
        to deliver truly remarkable sound.</p>
        <a class="speaker1-cta link">SEE PRODUCT</a>
    </div>

    <div class="speaker2-wrap flex">
        <div>
            <h2>ZX7 SPEAKER</h2>
            <PlainButton link="" action="SEE PRODUCT"/>
        </div>
    </div>

    <img src="./../assets/home/mobile/image-earphones-yx1.jpg" class="earphone" alt="earphones"/>

    <div class="earphones-wrap flex">
        <div>
            <h2>YX1 EARPHONES</h2>
            <PlainButton link="" action="SEE PRODUCT"/>
        </div>
    </div>
    <About />
    <Footer />
</template>

<script>
import Header from './../components/Header.vue'
import OrangeButton from './../components/OrangeButton.vue'
import Products from './../components/Products.vue'
import PlainButton from './../components/PlainButton.vue'
import About from './../components/About.vue'
import Footer from './../components/Footer.vue'

export default {
    name: 'Home',
    components: { 
        Header,
        OrangeButton,
        Products,
        PlainButton,
        About,
        Footer
    }
}
</script>

<style scoped>
    .head {
        background-image: url("./../assets/home/mobile/image-header.jpg"); /* The image used */
        background-color: #191919; /* Used if the image is unavailable */
        height: 90vh;
        justify-content: center;
    }

    .head,
    .speaker1-wrap,
    .speaker2-wrap {
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; 
    }

    .head > div {
        width: 75%;
    }

    .new {
        font-weight: 400;
        letter-spacing: 6px; 
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .new,
    .note {
        opacity: .7;
    }

    p, h1{
        text-align: center;
        color: white;
    }

    h1, 
    h2 {
        font-weight: 700;
    }

    .note {
        line-height: 1.7;
        margin: 1rem 0;
        font-size: .9rem;
    }

    
    .speaker1-wrap {
        background-image: url("./../assets/home/desktop/pattern-circles.svg");
        background-color: #D87D4A;
        height: auto;
        width: 90vw;
        margin: 6rem auto 2rem;
        border-radius: 5px;
        padding: 4rem 1.5rem;
    }

    .speaker1 {
        width: 60%;
        display: block;
        margin: auto;
    }

    .speaker1-wrap h2 {
        color: #fff;
        font-size: 2rem;
        text-align: center;
        line-height: 1.1;
        margin: 1.5rem 0;
    }
    
    .upgrade {
        font-size: .9rem;
        line-height: 1.6;
    }

    .speaker1-cta {
        background-color: #000;
        color: #fff;
        margin-top: 1.2rem;
    }

    .speaker2-wrap {
        background-image: url("./../assets/home/mobile/image-speaker-zx7.jpg");
        height: 250px;
        width: 90vw;
        border-radius: 7px;
        margin: auto;
    } 
    
    .speaker2-wrap > div{
        padding-left: 2rem;
    }

    h2 {
        font-size: 1.8rem;
    }
    
    .earphones-wrap {
        background-color: #F1F1F1;
        width: 90vw;
        border-radius: 7px;
        margin: auto;
        padding: 2rem;
    }

    .earphone {
        width: 90vw;
        border-radius: 7px;
        display: block;
        height: auto; 
        margin: 1.8rem auto;   
    }
</style>