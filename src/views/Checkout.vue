<template>
    <NavBar />
    <div class="checkout-container">
        <div>
            <header>
                <h1>CHECKOUT</h1>
            </header>
            <main>
                <p class="orange">BILLING DETAILS</p>
                <form> 
                    <div class="input-wrap">
                        <label for="Name">Name</label><br>
                        <input type="text" placeholder="Alexei Ward" v-model="name"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->
                    </div>

                    <div class="input-wrap">
                        <label for="Email">Email</label><br>
                        <input type="email" placeholder="alexei@gmail.com" v-model="email"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->
                    </div>

                    <div class="input-wrap">
                        <label for="Number">Number</label><br>
                        <input type="number" placeholder="+1 202-555-0136" v-model="email"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->
                    </div>
                </form>
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
        padding: 2rem 1.5rem;
        background-color: #f1f1f1;
    }

    .checkout-container > div {
        background-color: #fff;
        padding: 2rem 1rem;
        border-radius: 7px;
    }

    label, 
    .orange {
        font-weight: 700;
    }

    .orange {
        color: #D87D4A;
        font-size: .9rem;
        margin: 1.5rem 0;
    }

    label {
        font-size: .85rem;
    }

    input {
        padding-left: 2rem;
        border: 1px solid #cfcfcf;
        border-radius: 5px;
        width: 100%;
        height: 3rem;
        margin: .5rem 0 1.5rem;
    }
</style>