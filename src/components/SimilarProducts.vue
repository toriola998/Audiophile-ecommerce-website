<template>
    <div class="wrap3">
        <div class="grey-bg">
            <img src="./../assets/you-may-also-like/product1.svg" alt="product"/>
        </div>
        <h4 class="also-product-name">XX99 MARK I</h4>
        <OrangeButton btnAction="SEE PRODUCT"/>
    </div>
</template>

<script>
import OrangeButton from './../components/OrangeButton.vue'
export default {
     components: {
        OrangeButton
    }
}
</script>

<style scoped>
     .wrap3 {
        padding: 0 1.5rem 2.5rem;
    }

    .grey-bg {
        background-color: #f1f1f1;
        padding: 1rem 0;
        border-radius: 7px;
    }

    img {
        height: auto;
        width: 30%;
        display: block;
        margin: auto;
    }

    .also-product-name {
        text-align: center;
        font-size: 1.4rem;
        margin: 1.5rem 0;
    }

</style>