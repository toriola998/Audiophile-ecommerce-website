<template>
    <div class="wrap1">
        <img :src="require(`@/assets/${imageName}/mobile/image-category-page-preview.jpg`)"
            alt="headphone" 
            class="headphone mobile"/>
         <img :src="require(`@/assets/${imageName}/tablet/image-category-page-preview.jpg`)"
            alt="headphone" 
            class="headphone tablet"/>
             
        
        <p class="new">NEW PRODUCT</p>
        <h3>{{ productName}}</h3>
        <p>{{aboutProduct}}</p>
        <OrangeButton btnAction="SEE PRODUCT"/>
    </div>
</template>

<script>
import OrangeButton from './../components/OrangeButton.vue'
export default {
    name: 'ProductLayout',
    components: {
        OrangeButton
    },
    props: ['imageName', 'productName', 'aboutProduct',]
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

@media screen and (min-width: 700px) {
    .tablet {
        display: block;
    }

    .mobile,
    .desktop {
        display: none;
    }

}
</style>