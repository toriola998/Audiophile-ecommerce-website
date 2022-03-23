<template>
    <div>
        <div class="flex">
            <button>
                <img src="./../assets/icons/hamburger.svg" alt="Hamburger menu"/>
            </button>
            <router-link to="/">
                <img src="./../assets/icons/logo.svg" alt="Audiophile - Home"/>
            </router-link>
            <button>
                <img src="./../assets/icons/cart.svg" alt="Cart for products"/>
            </button>
        </div> 

        <nav>
            <ul><li></li>
            </ul>
        </nav>
    </div> 
</template>

<script>
export default {

}
</script>

<style scoped>
    .flex {
        background-color: #191919;
        padding: 0 1.2rem;
        justify-content: space-between;
        height: 5rem;
        border-bottom: 1px solid #979797;
    }

    button {
        background-color: transparent;
        border: 0;
    }
</style>