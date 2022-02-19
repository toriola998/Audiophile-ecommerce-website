<template>
    <div class="wrap3">
        <h3 class="also-like">YOU MAY ALSO LIKE</h3>
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
    name: 'YouMayAlsoLike',
    components: {
        OrangeButton
    }
}
</script>

<style scoped>
    .wrap3 {
        padding: 0 1.5rem;
    }

    .also-like {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 2rem;
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