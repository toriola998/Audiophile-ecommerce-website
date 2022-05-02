<template>
    <div class="grey-bg flex">
        <!-- <button @click="$emit('decreaseQuantity')">
            <img src="./../assets/icons/minus.svg" 
                 alt="reduce number of product from cart" />
        </button> -->
        <p> {{ productQuantity }} </p>
        <p> 1 </p>
        <!-- <button @click="$emit('increaseQuantity')">
            <img src="./../assets/icons/add.svg" 
                 alt="increase number of product in cart" />
        </button> -->
    </div>
</template>

<script>
export default {
    name: 'AddToCartButton',
    props: ['id', 'productQuantity'],
}
</script>

<style scoped>
    .grey-bg {
        background-color: #f1f1f1;
        justify-content: center;
        height: 3rem;
        width: 8rem;
    }
</style>