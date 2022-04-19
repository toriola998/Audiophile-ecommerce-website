<template>
    <div class="wrap-">  
        <picture>
            <source media="(min-width: 1000px)" 
                    :srcset="require(`@/assets/${imageFileName}/desktop/image-category-page-preview.jpg`)">
            <source media="(min-width: 700px)" 
                    :srcset="require(`@/assets/${imageFileName}/tablet/image-category-page-preview.jpg`)">
            <img :src="require(`@/assets/${imageFileName}/mobile/image-category-page-preview.jpg`)"
                    alt="Picture of the YX1 earphone"
                    class="headphone">
        </picture>
        <div class="about-products">
            <p class="new">NEW PRODUCT</p>
            <h2>{{ productName}}</h2>
            <p>{{aboutProduct}}</p>
            <OrangeButton btnAction="SEE PRODUCT" class="button"/>
        </div>
    </div>
</template>

<script>
import OrangeButton from './../components/OrangeButton.vue'
export default {
    name: 'ProductLayout',
    components: {
        OrangeButton
    },
    props: ['imageFileName', 'productName', 'aboutProduct',]
}
</script>

<style scoped>
    .wrap1 {
        padding: 0 1.5rem 6rem;
    }

    .headphone {
        display: block;
        margin: auto;
        width: 100%;
        height: auto;
        border-radius: 7px;
    }
 
    p, h2 {
        text-align: center;
    }

    .new {
        color: #D87D4A;
        letter-spacing: 5px;
        font-size: .9rem;
        margin: 1rem 0;
    }

    h2 {
        font-size: 1.7rem;
        margin: 1.5rem auto;
        width: 320px;
        line-height: 1;
    }

    p {
        color: #000;
        opacity: 0.8;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

@media screen and (min-width: 520px) {
    .headphone {
        width: 70%;
    }
}

@media screen and (min-width: 700px) {
    .headphone {
        width: 100%;
    }

    h2 {
        font-size: 2rem;
    }

    p {
        padding: 0 7rem;
    }
}

@media screen and (min-width: 1000px) {
    .wrap1 {
        display: grid;
        grid-template-columns: 50% auto;
        align-items: center;
        padding: 6rem 6rem;
    }

    h2 {
        margin: 1rem 0;
        font-size: 2.2rem;
    }

    .about-products {
        margin-left: 4rem;
    }

    p {
        padding: unset;
    }

    p, h2 {
        text-align: initial;
    }

    h2, .button {
        margin: initial;
    }

    .new {
        margin-bottom: .5rem;
    }

    h2 {
        margin-bottom: 1rem;  
    }
}

@media screen and (min-width: 1200px) {
    .wrap1 {
        padding: 6rem 10rem;
    }

     h2 {
        margin: 1rem 0 2rem;
        font-size: 2.2rem;
    }
}
</style>