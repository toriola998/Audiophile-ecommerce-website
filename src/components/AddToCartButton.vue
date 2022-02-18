<template>
    <div class="grey-bg flex">
        <img src="./../assets/icons/add.svg" alt="minus-cart" />
        <p>1</p>
        <img src="./../assets/icons/minus.svg" alt="add-to-cart" />
    </div>
</template>

<script>
export default {
    name: 'AddToCartButton'
}
</script>

<style scoped>
    .grey-bg {
        background-color: #f1f1f1;
        justify-content: space-evenly;
        height: 3rem;
        width: 8rem;
    }
</style>