<template>
    <Header/>
    <div class="head">
        <p>NEW PRODUCT</p>
        <h1>XX99 Mark II HEADPHONES</h1>
        <p>Experience natural, lifelike audio and exceptional build 
        quality made for the passionate music enthusiast.</p>
        <a href="">SEE PRODUCT</a>
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
    }
</style>