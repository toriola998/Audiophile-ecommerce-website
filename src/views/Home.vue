<template>
    <Header/>
    <div class="head flex">
        <div>
            <p class="new">NEW PRODUCT</p>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p class="note">Experience natural, lifelike audio and exceptional build 
            quality made for the passionate music enthusiast.</p>
            <a href="" class="cta">SEE PRODUCT</a>
        </div> 
    </div>
</template>

<script>
import Header from './../components/Header.vue'

export default {
    name: 'Home',
    components: { Header,
    }
}
</script>

<style scoped>
    .head {
        background-image: url("./../assets/home/mobile/image-header.jpg"); /* The image used */
        background-color: #191919; /* Used if the image is unavailable */
        height: 90vh;
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; 
        justify-content: center;
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

    p, h1, .cta{
        text-align: center;
        color: white;
    }

    h1 {
        font-weight: 700;
    }

    .note {
        line-height: 1.7;
        margin: 1rem 0;
        font-size: .9rem;
    }

    .cta {
        display: block;
        margin: 0 auto;
        background-color: #D87D4A;
        width: 10rem;
        font-size: 1rem;
        height: 3rem;
        padding-top: .8rem;
    }
</style>