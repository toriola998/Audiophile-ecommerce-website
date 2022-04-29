<template>
    <div class="wrap">
        <div class="box">
            <img src="./../assets/Products/product1.svg" 
                class="product" 
                alt="Image of a headphone"/>
            <p>HEADPHONES</p>
            <div class="flex shop">
                <router-link to="/headphones">SHOP
                    <img src="./../assets/shared/desktop/icon-arrow-right.svg" 
                            alt="click here to visit headhones products"/>
                </router-link>
            </div> 
        </div>

        <div class="box">
            <img src="./../assets/Products/product2.svg" 
                class="product" 
                alt="Image of a speaker"/>
            <p>SPEAKERS</p>
            <div class="flex shop">
                <router-link to="/speakers">SHOP
                    <img src="./../assets/shared/desktop/icon-arrow-right.svg" 
                        alt="click here to visit speakers products"/> 
                </router-link> 
            </div> 
        </div>

        <div class="box">
            <img src="./../assets/Products/product3.svg" 
                class="product" 
                alt="Image of an earphone"/>
            <p>EARPHONES</p>
            <div class="flex shop">
                <router-link to="/earphones">SHOP
                    <img src="./../assets/shared/desktop/icon-arrow-right.svg" 
                        alt="click here to visit earphones products"/>
                </router-link>
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
    .wrap {
        padding: 0 1.5rem;
    }
    
    .product {
        display: block;
        margin: 0 auto;
        position: relative;
        bottom: 3rem;
    }

    .box {
        background-color: #F1F1F1;
        width: 100%;
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
        font-size: .85rem;
        font-weight: 700;
    }

    a img {
        margin-left: .6rem;
    }

    .shop {
        justify-content: center;
        cursor: pointer;
    }

    @media screen and (min-width: 700px) {
        .box {
            width: 30%;
        }

        .wrap {
            display: flex;
            padding: 0 1.5rem;
            gap: 15px; 
        }
    }

    @media screen and (min-width: 1000px) {
        .wrap {
            padding: 0 6rem;
        }
    }

    @media screen and (min-width: 1200px) {
        .wrap {
            padding: 0 10rem;
        }
    }
</style>