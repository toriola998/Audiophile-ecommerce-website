<template>
    <div class="wrap">
        <div class="box">
            <img src="./../assets/Products/product1.svg" class="product" alt=""/>
            <p>HEADPHONES</p>
            <div class="flex shop">
                <a href="">SHOP</a>
                <img src="./../assets/shared/desktop/icon-arrow-right.svg" alt=""/>
            </div> 
        </div>

         <div class="box">
            <img src="./../assets/Products/product2.svg" class="product" alt=""/>
            <p>SPEAKERS</p>
            <div class="flex shop">
                <a href="">SHOP</a>
                <img src="./../assets/shared/desktop/icon-arrow-right.svg" alt=""/>
            </div> 
        </div>

         <div class="box">
            <img src="./../assets/Products/product3.svg" class="product" alt=""/>
            <p>EARPHONES</p>
            <div class="flex shop">
                <a href="">SHOP</a>
                <img src="./../assets/shared/desktop/icon-arrow-right.svg" alt=""/>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'Products',
}
</script>

<style scoped>
    .product {
        display: block;
        margin: 0 auto;
        position: relative;
        bottom: 3rem;
    }

    .box {
        background-color: #F1F1F1;
        width: 90vw;
        margin: 5rem auto 0;
        border-radius: 5px;
        padding-bottom: 1rem;
    }

    p {
       font-weight: 700; 
       text-align: center;
       margin: -1rem 0 1rem;
    }

    a {
        color: #000;
        opacity: 0.5;
        margin-right: .8rem;
    }

    .shop {
        justify-content: center;
        cursor: pointer;
    }

    @media screen and (min-width: 610px) {
        .box {
            width: 28vw;
        }

        .wrap {
            display: grid;
            grid-template-columns: auto auto auto;
            padding: 0 1.5rem;
            gap: 15px;
            
            
        }
    }
</style>