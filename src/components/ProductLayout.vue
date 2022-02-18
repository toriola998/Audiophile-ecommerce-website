<template>
     <div class="wrap1">
        <div class="img-wrap flex">
            <img :src="productImage" alt="headphone" class="headphone"/>
        </div>      
        
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
    props: ['productImage', 'productName', 'aboutProduct']
}
</script>

<style scoped>
     .wrap1 {
        padding: 0 1.5rem 6rem;
    }

    .img-wrap {
        background-color: #f1f1f1; 
        justify-content: center;
        width: 95%;
        margin: 0 auto 1.5rem;
        padding: 3rem 0;
        border-radius: 7px;
    }

    .headphone {
        display: block;
        margin: auto;
        width: 75%;
        height: auto;
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
</style>