<template>
    <NavBar />
    <header role="banner">
        <div class="head flex">
            <div>
                <p class="new">NEW PRODUCT</p>
                <h1>XX99 MARK II HEADPHONES</h1>
                <p class="note">Experience natural, life like audio and exceptional build 
                quality made for the passionate music enthusiast.</p>
                <OrangeButton to="/product-detail/4" btnAction="SEE PRODUCT" class="hero-cta"/>
            </div>
        </div>
    </header>
    <main role="main">
        <ProductsMenu />
        <section aria-labelledby="zx9-speaker">
            <div class="speaker1-wrap">
                <img src="./../assets/home/mobile/image-speaker-zx9.png" 
                    alt="Image of the ZX9 speaker" 
                    class="speaker1"/>
                <div>
                    <h2 id="zx9-speaker">ZX9 <br>
                        SPEAKER</h2>
                    <p class="upgrade">Upgrade to premium speakers that are phenomenally built 
                    to deliver truly remarkable sound.</p>
                    <router-link to="/product-detail/6" class="speaker1-cta link">SEE PRODUCT</router-link>
                </div>
            </div>
        </section>

        <section aria-labelledby="zx7-speaker"> 
            <div class="speaker2-wrap flex">
                <div>
                    <h2 id="zx7-speaker">ZX7 SPEAKER</h2>
                    <PlainButton to="/product-detail/5" action="SEE PRODUCT"/>
                </div>
            </div>
        </section>

        <section aria-labelledby="yx1-earphones">
            <div class="image-flex">
                <picture>
                    <source media="(min-width: 1000px)" 
                            srcset="./../assets/home/desktop/image-earphones-yx1.jpg">
                    <source media="(min-width: 700px)" 
                            srcset="./../assets/home/tablet/image-earphones-yx1.jpg">
                    <img src="./../assets/home/mobile/image-earphones-yx1.jpg" 
                            alt="Picture of the YX1 earphone"
                            class="earphone">
                </picture>
                <div class="earphones-wrap flex">
                    <div>
                        <h2 id="yx1-earphones">YX1 EARPHONES</h2>
                        <PlainButton to="/product-detail/1" action="SEE PRODUCT"/>
                    </div>
                </div> 
            </div>
        </section>
        <AboutUs />
    </main>
    <TheFooter />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import OrangeButton from './../components/OrangeButton.vue'
import ProductsMenu from '../components/ProductsMenu.vue'
import PlainButton from './../components/PlainButton.vue'
import AboutUs from '../components/AboutUs.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
    name: 'Home',
    components: { 
        NavBar,
        OrangeButton,
        ProductsMenu,
        PlainButton,
        AboutUs,
        TheFooter
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
        opacity: 0.5;
    }

    .note {
        opacity: .7;
    }

    p, h1{
        text-align: center;
        color: white;
    }

    h1 {
        line-height: 1.1;
        font-size: 2.1rem
    }

    .note {
        line-height: 1.7;
        margin: 1rem 0;
        font-size: .9rem;
    }

    section{
        padding: 0 1.5rem;
    }

    .speaker1-wrap {
        background-image: url("./../assets/home/desktop/pattern-circles.svg");
        background-color: #D87D4A;
        height: auto;
        width: 100%;
        margin: 6rem auto 2rem;
        border-radius: 5px;
        padding: 3rem 1.5rem;
    }

    .speaker1 {
        width: 155px;
        display: block;
        margin: auto;
    }

    .speaker1-wrap h2 {
        color: #fff;
        font-size: 2rem;
        text-align: center;
        line-height: 1.1;
        margin: 1.7rem 0;
    }
    
    .upgrade {
        font-size: .9rem;
        line-height: 1.6;
        opacity: 0.75;
    }

    .speaker1-cta {
        background-color: #000;
        color: #fff;
        margin-top: 1.2rem;
    }

    .link {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1.1rem auto 0;
        height: 3rem;
        width: 10rem;
        font-size: .81rem;
        font-weight: 700;
    }

    .speaker2-wrap {
        background-image: url("./../assets/home/mobile/image-speaker-zx7.jpg");
        height: 250px;
        width: 100%;
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
        width: 100%;
        border-radius: 7px;
        margin: auto;
        padding: 2rem;
    }

    .earphone {
        width: 100%;
        border-radius: 7px;
        display: block;
        height: auto; 
        margin: 1.8rem auto;   
    }

@media screen and (min-width: 520px) {
     .head {
        background-image: url("./../assets/home/tablet/image-header.jpg");
     }

     h1 {
         font-size: 3rem;
    }

    .speaker1-wrap h2{
        font-size: 2.2rem ;
    }
}

@media screen and (min-width: 760px) {
    .head {
        height: 100vh;
    }

    .head > div {
        width: 45%;
    }

    h1 {
        margin-top: 1.5rem;
        font-size: 3.2rem;
    }

    .note {
        margin: 1.8rem 0;
    }

    .speaker1 {
        width: 45%;
        margin-bottom: -0.4rem;
    }

    .image-flex {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .earphones-wrap {
        margin: 1.8rem 0 1.8rem 1rem;
    }

    .speaker1-wrap {
        display: flex;
        padding: 4rem 4rem 0;
    }

    .speaker2-wrap {
        background-image: url("./../assets/home/tablet/image-speaker-zx7.jpg");
        height: 340px;
    }

    .speaker1-wrap > div{
        margin-left: 5rem;
    }

    .speaker1-cta {
        margin: 1.3rem 0 0 0;
    }

    .speaker1-wrap h2,
    .upgrade  {
        text-align: initial;
    }
}

@media screen and (min-width: 1000px) {
    .head {
      background-image: url("./../assets/home/desktop/image-hero.jpg"); 
      justify-content: initial;
      padding: 4rem;
    }

    .head > div {
        width: 45%;
    }

    h1 {
        font-size: 3.5rem;
    }

    .note,
    .upgrade {
        width: 325px;
    }

    .upgrade {
        margin: 2.5rem 0;
    }

    .speaker2-wrap {
        background-image: url("./../assets/home/desktop/image-speaker-zx7.jpg");
    }

    .speaker1-wrap h2 {
        font-size: 2.7rem;
    }

    .speaker2-wrap > div {
        padding-left: 4rem;
    }

    .earphones-wrap {
        padding-left: 4rem ;
    }

    p, 
    h1 {
        text-align: initial;
    }

    .speaker1-wrap {
        padding: 4rem 6rem 0;
    }

    .speaker1-wrap > div{
        margin-left: 5rem;
    }

    .hero-cta{
        margin: initial;
    }

    section {
        padding: 0 6rem;
    }
}

@media screen and (min-width: 1200px) {
    .speaker1 {
        width: 40%;
    }

    .head {
        padding: 10rem;
    }

    section {
        padding: 0 10rem;
    }
}
</style>