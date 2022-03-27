<template>
    <div>
        <h1 class="flex">{{ product}}</h1>
    </div>
</template>

<script>
export default {
    name: 'ProductHeader',
    props: ['product']
}
</script>

<style scoped>
     h1 {
        background-color: #191919;
        justify-content: center;
        height: 5rem;
        color: #fff;
        letter-spacing: 3px;
        font-size: 1.4rem;
        margin-bottom: 3rem;
    }

    @media screen and (min-width: 520px) {
       h1 {
           height: 10rem;
       }
    }
</style>