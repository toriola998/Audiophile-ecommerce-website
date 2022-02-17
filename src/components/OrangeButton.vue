<template>
    <a :href="link" class="cta link">{{ btnAction}}</a>
</template>

<script>
export default {
    name: 'OrangeButton',
    props: ['btnAction', 'link']
}
</script>

<style scoped>
    .cta {
        background-color: #D87D4A;
        text-align: center;
        color: white;
    }

    .link {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        height: 3rem;
        width: 10rem;
        font-size: .9rem;
        cursor: pointer;
    }

</style>