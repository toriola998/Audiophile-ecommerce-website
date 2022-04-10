<template>
    <div class="grey-bg flex">
        <button>
            <img src="./../assets/icons/minus.svg" alt="reduce number of product from cart" />
        </button>
        <p>1</p>
        <button>
            <img src="./../assets/icons/add.svg" alt="increase number of product in cart" />
        </button>
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