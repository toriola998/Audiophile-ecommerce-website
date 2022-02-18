<template>
    <a  href="link" class="plain-link">{{ action }}</a>
</template>

<script>
export default {
    name: 'PlainButton',
    props: ['link', 'action']
}
</script>

<style scoped>
     .plain-link {
        font-weight: 700;
        height: 3rem;
        width: 10rem;
        font-size: .9rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center ;
        border: 2px solid #000;
        margin-top: 2rem;
        color: #000;
    }
</style>