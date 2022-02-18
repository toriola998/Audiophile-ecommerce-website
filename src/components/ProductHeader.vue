<template>
    <div>
        <h2 class="flex">{{ productName}}</h2>
    </div>
</template>

<script>
export default {
    name: 'ProductHeader',
    props: ['productName']
}
</script>

<style scoped>
     h2 {
        background-color: #191919;
        justify-content: center;
        height: 5rem;
        color: #fff;
        letter-spacing: 3px;
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
    }
</style>