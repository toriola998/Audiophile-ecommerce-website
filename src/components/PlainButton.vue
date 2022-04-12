<template>
    <router-link to="" class="plain-link">{{ action }}</router-link>
</template>

<script>
export default {
    name: 'PlainButton',
    props: ['action']
}
</script>

<style scoped>
     .plain-link {
        font-weight: 700;
        height: 3rem;
        width: 10rem;
        font-size: .81rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center ;
        border: 2px solid #000;
        margin-top: 2rem;
        color: #000;
    }
</style>