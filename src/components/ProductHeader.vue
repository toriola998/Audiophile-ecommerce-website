<template>
    <div class="product-header flex">
        <div>
            <h1>{{ product}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductHeader',
    props: ['product']
}
</script>

<style scoped>
    .product-header {
        background-color: #191919;
        height: 5rem;
        justify-content: center;
    }

     h1 {
        color: #fff;
        letter-spacing: 3px;
        font-size: 1.4rem;
    }

    @media screen and (min-width: 520px) {
       .product-header {
           height: 10rem;
       }
    }

    @media screen and (min-width: 700px) {
        h1 {
           font-size: 1.7rem;
       }
    }

    
    @media screen and (min-width: 1000px) {
        .product-header {
             height: 13rem;
        }

        h1 {
           font-size: 2.2rem;
       }
    }
</style>