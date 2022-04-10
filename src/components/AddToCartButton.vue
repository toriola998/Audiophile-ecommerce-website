<template>
    <div class="grey-bg flex">
        <button @click="decreaseQuantity()">
            <img src="./../assets/icons/minus.svg" alt="reduce number of product from cart" />
        </button>
        <p>{{ productQuantity }}</p>
        <button @click="productQuantity++">
            <img src="./../assets/icons/add.svg" alt="increase number of product in cart" />
        </button>
    </div>
</template>

<script>
export default {
    name: 'AddToCartButton',
    data () {
        return  {
            productQuantity: 1,
        }
    },
    methods: {
        decreaseQuantity() {
            if(this.productQuantity >= 1) {
                 this.productQuantity--;
            }else {
                this.productQuantity = 0;
            }  
        }
    }
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