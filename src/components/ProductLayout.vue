<template>
    <div class="wrap1">
        <!--SHOW IMAGE ONLY ON MOBILE DEVICES-->
        <img :src="require(`@/assets/${imageFileName}/mobile/image-category-page-preview.jpg`)"
            alt="headphone" 
            class="headphone mobile"/>
        <!--SHOW IMAGE ONLY ON TABLET DEVICES-->
        <img :src="require(`@/assets/${imageFileName}/tablet/image-category-page-preview.jpg`)"
            alt="headphone" 
            class="headphone tablet"/>
        <!--SHOW IMAGE ONLY ON DESKTOP DEVICES-->
        <img :src="require(`@/assets/${imageFileName}/desktop/image-category-page-preview.jpg`)"
            alt="headphone" 
            class="headphone desktop"/>

        <div class="about-products">
            <p class="new">NEW PRODUCT</p>
            <h3>{{ productName}}</h3>
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
 
    p, h3 {
        text-align: center;
    }

    .new {
        color: #D87D4A;
        letter-spacing: 5px;
        font-size: .9rem;
    }

    h3 {
        font-size: 1.7rem;
        margin: 1.5rem auto;
        width: 320px
    }

    p {
        color: #000;
        opacity: 0.5;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .tablet,
    .desktop {
        display: none;
    }
@media screen and (min-width: 520px) {
    .headphone {
        width: 70%;
    }
}

@media screen and (min-width: 700px) {
    .tablet {
        display: block;
    }

    .mobile,
    .desktop {
        display: none;
    }

    .headphone {
        width: 100%;
    }
}

@media screen and (min-width: 1000px) {
    .desktop {
        display: block;
    }

    .mobile,
    .tablet {
        display: none;
    }

    .wrap1 {
        display: flex;
        align-items: center;
        padding: 0 6rem 6rem;
    }

    .headphone {
        width: 45%;
        margin: 0 4rem 0 0;
    }

    p, h3 {
        text-align: initial;
    }

    h3, .button {
        margin: initial;
    }

    .about-products {
        width: 45%;
    }

    .new {
        margin-bottom: .5rem;
    }

    h3 {
        margin-bottom: 1rem;  
    }
}

@media screen and (min-width: 1200px) {
    .wrap1 {
        padding: 0 10rem 6rem;
    }
}
</style>