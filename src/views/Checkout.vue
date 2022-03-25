<template>
    <NavBar />
    <div class="checkout-container">
        <div>
            <header>
                <h1>CHECKOUT</h1>
            </header>
            <main>
                <form> 
                    <p class="orange">BILLING DETAILS</p>
                        <label for="name">Name</label><br>
                        <input type="text" placeholder="Alexei Ward" id="name" v-model="name"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->
                    
                        <label for="email">Email</label><br>
                        <input type="email" placeholder="alexei@gmail.com" id="email" v-model="email"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->
                    
                        <label for="number">Number</label><br>
                        <input type="tel" placeholder="+1 202-555-0136" id="number" v-model="number"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->
                    
                        <p class="orange">SHIPPING INFO</p>
                        <label for="address">Address</label><br>
                        <input type="text" placeholder="1137 Williams Avenue" id="address" v-model="address"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->
                    
                        <label for="zip-code">Zip Code</label><br>
                        <input type="number" placeholder="10001" id="zip-code" v-model="zipCode"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->
                    
                        <label for="city">City</label><br>
                        <input type="text" placeholder="New York" id="city" v-model="city"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->
                   
                        <label for="country">Country</label><br>
                        <input type="text" placeholder="United States" id="country" v-model="country"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->

                        <p class="orange">PAYMENT DETAILS</p>
                        <p>Payment Method</p>
                        
                        <div class="flex checkbox-wrap">
                            <input type="checkbox" id="e-money" v-model="address"/>
                            <label for="e-money">e-Money</label>
                        </div>

                        <div class="flex checkbox-wrap">
                            <input type="checkbox" id="cash-on-delivery" v-model="address"/>
                            <label for="cash-on-delivery">Cash on delivery</label>
                        </div>   
                        
                        <label for="e-money-number">e-money Number</label><br>
                        <input type="number" placeholder="238521993" id="e-money-number" v-model="address"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->
                    
                        <label for="e-money-pin">e-money PIN</label><br>
                        <input type="number" placeholder="6891" id="e-money-pin" v-model="zipCode"/>
                        <!---<p class="error" v-if="nameError">Can't be empty</p>-->

                        <div>
                            <img src="./../assets/Shape.png" alt="Two hands exchanging cash" />
                            <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery
                            courier arrives at your residence. Just make sure your address is correct so 
                            that your order will not be cancelled.</p>
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
    .orange,
    input::placeholder {
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
        margin: .5rem 0 1.5rem;
    }

    input,
    .checkbox-wrap {
        border: 1px solid #cfcfcf;
        border-radius: 5px;
        width: 100%;
        height: 3rem;
        padding-left: 2rem;
    }

    .checkbox-wrap {
        margin-top: 1rem;
    }

    input[type="checkbox"] {
        width: initial;
        margin: 0 1rem 0 0;
    }

</style>