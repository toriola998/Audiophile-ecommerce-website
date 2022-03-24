<template>
    <NavBar />
    <div class="checkout-container">
        <div>
            <header>
                <h1>CHECKOUT</h1>
            </header>
            <main>
            </main>
        </div>
    </div>
    <TheFooter />
</template>

<script>
import NavBar from './../components/NavBar.vue'
import TheFooter from './../components/TheFooter.vue'
export default {
    name: 'Checkout',
    components: {
        NavBar,
        TheFooter
    }
}
</script>

<style scoped>
    .checkout-container {
        padding: 0 1.5rem;
        background-color: #f1f1f1;
    }

    .checkout-container > div {
        background-color: #fff;
        padding: 0 1rem;
    }
</style>