<template>
    <section class="best-audio-gear" aria-labelledby="about-us">
        <picture>
            <source media="(min-width: 1000px)" 
                    srcset="./../assets/shared/desktop/image-best-gear.jpg">
            <source media="(min-width: 760px)" 
                    srcset="./../assets/shared/tablet/image-best-gear.jpg">
            <img src="./../assets/shared/mobile/image-best-gear.jpg" 
                    alt="A fine man using an headphone"
                    class="about-img">
        </picture>
        <div class="about-content">
            <h2 id="about-us">BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
            earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
            rooms available for you to browse and experience a wide range of our products. Stop by our 
            store to meet some of the fantastic people who make Audiophile the best place to buy your portable
            audio equipment.</p>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .best-audio-gear {
        padding: 6rem 1.5rem;
    }

    .about-img {
        width: 100%;
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
        opacity: 0.7;
        line-height: 1.7;
        font-size: .9rem;
        font-weight: 500;
    }

    span {
        color: #D87D4A;
    }

    @media screen and (min-width: 520px) {
        .about-content {
            padding: 0 3rem;
        }
    }

    @media screen and (min-width: 700px) {
        h2 {
            margin: 2.5rem 0;
            font-size: 2.3rem;
        }
    }

    @media screen and (min-width: 1000px) {
        .best-audio-gear {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            padding: 6rem;
        }

        h2, p {
            text-align: initial;
        }

        h2 {
            width: 370px;
            font-size: 2.5rem ;
        }

        p {
            font-size: 1.05rem ;
        }

        .about-img {
            width: 85%;
            margin-left: 4rem;
        }

        .about-content {
            padding: initial;
            width: 50%;
        }
    }

    @media screen and (min-width: 1200px) {
        .best-audio-gear {
            padding: 6rem 10rem;
        }

        .about-img {
            
            margin-left: 6rem;
        }
        
    }
</style>