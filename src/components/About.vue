<template>
    <div class="wrapper">
        <img src="./../assets/shared/mobile/image-best-gear.jpg" alt=""/>
        <h2>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
        rooms available for you to browse and experience a wide range of our products. Stop by our 
        store to meet some of the fantastic people who make Audiophile the best place to buy your portable
        audio equipment.</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .wrapper {
        padding: 6rem 1.5rem;
    }

    img {
        width: 90vw;
        height: auto;
        display: block;
        margin: auto;
        border-radius: 7px ;
    }

    h2, p {
        text-align: center;
    }

    h2 {
        font-size: 2rem;
        font-weight: 700;
        margin: 2rem 0;
    }

    p {
        color: #000;
        opacity: 0.5;
        line-height: 1.7;
        font-size: .9rem;
    }

    span {
        color: #D87D4A;
    }
</style>