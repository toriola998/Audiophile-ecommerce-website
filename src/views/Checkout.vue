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
                    <div class="tab-grid">
                        <div>
                            <label for="name">Name</label><br>
                            <input type="text" placeholder="Alexei Ward" id="name" v-model="name"/>
                        </div>

                        <div>
                            <label for="email">Email</label><br>
                            <input type="email" placeholder="alexei@gmail.com" id="email" v-model="email"/>
                        </div>
                        <div>
                            <label for="number">Number</label><br>
                            <input type="tel" placeholder="+1 202-555-0136" id="number" v-model="number"/>
                        </div>
                    </div> 
                    
                    <p class="orange">SHIPPING INFO</p>
                    <div>
                        <label for="address">Address</label><br>
                        <input type="text" placeholder="1137 Williams Avenue" id="address" v-model="address"/>
                    </div>

                    <div class="tab-grid">
                        <div>
                            <label for="zip-code">Zip Code</label><br>
                            <input type="number" placeholder="10001" id="zip-code" v-model="zipCode"/>
                        </div>

                        <div>
                            <label for="city">City</label><br>
                            <input type="text" placeholder="New York" id="city" v-model="city"/>
                        </div>

                        <div>
                            <label for="country">Country</label><br>
                            <input type="text" placeholder="United States" id="country" v-model="country"/>
                        </div>
                    </div> 
                    <p class="orange">PAYMENT DETAILS</p>
                    <div class="tab-grid">
                        <p class="sub-heading">Payment Method</p>
                        <div class="checkbox-container">
                            <div class="flex checkbox-wrap">
                                <input type="checkbox" id="e-money" v-model="address"/>
                                <label for="e-money">e-Money</label>
                            </div>

                            <div class="flex checkbox-wrap">
                                <input type="checkbox" id="cash-on-delivery" v-model="address"/>
                                <label for="cash-on-delivery">Cash on delivery</label>
                            </div>   
                        </div>
                    </div>

                    <div class="tab-grid">
                        <div>
                            <label for="e-money-number">e-money Number</label><br>
                            <input type="number" placeholder="238521993" id="e-money-number" v-model="address"/>
                        </div>

                        <div>
                            <label for="e-money-pin">e-money PIN</label><br>
                            <input type="number" placeholder="6891" id="e-money-pin" v-model="zipCode"/>
                        </div>
                    </div>  
                    
                    <div class="tab-flex">
                        <img src="./../assets/Shape.png" alt="Two hands exchanging cash" />
                        <p class="cash-delivery">The 'Cash on Delivery' option enables you to pay in cash when our delivery
                        courier arrives at your residence. Just make sure your address is correct so 
                        that your order will not be cancelled.</p>
                    </div>
                </form>

                <section aria-labelledby="summary" class="summary-container">
                    <h2 id="summary">SUMMARY</h2>
                    <ul class="product-summary">
                        <li class="flex"> 
                            <img src="./../assets/cart/image-zx9-speaker.jpg"  class="product-image" alt=""/>
                            <div class="flex ">
                                <p>
                                    <span class="product-name">XX99 MK II </span><br>
                                    <span class="product-price">$ 2,999</span>
                                </p>
                                <span class="product-quantity">*1</span>
                            </div>
                        </li>

                        <li class="flex"> 
                            <img src="./../assets/cart/image-zx9-speaker.jpg"  class="product-image" alt=""/>
                            <div class="flex ">
                                <p>
                                    <span class="product-name">XX99 MK II </span><br>
                                    <span class="product-price">$ 2,999</span>
                                </p>
                                <span class="product-quantity">*1</span>
                            </div>
                        </li>
                    </ul>
                    
                    <ul>
                        <li class="flex total-wrap">
                            <span class="title">TOTAL</span>
                            <span class="price">$ 2,999</span>
                        </li>
                        <li class="flex total-wrap">
                            <span class="title">SHIPPING</span>
                            <span class="price">$ 2,999</span>
                        </li>
                        <li class="flex total-wrap">
                            <span class="title">VAT (INCLUDED)</span>
                            <span class="price">$ 2,999</span>
                        </li>
                        <li class="flex total-wrap grand">
                            <span class="title">GRAND TOTAL</span>
                            <span class="price">$ 2,999</span>
                        </li>
                    </ul>
                </section>
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

    form,
    .summary-container{
        background-color: #fff;
        padding: 2rem 1.5rem;
        border-radius: 7px;
    }

    label, 
    .price,
    .orange,
    .sub-heading,
    .product-name,
    .product-price,
    .product-quantity,
    input::placeholder {
        font-weight: 700;
    }

    .orange {
        color: #D87D4A;
        font-size: .9rem;
        margin: 1.5rem 0;
    }

    label,
    .sub-heading {
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

    .checkbox-container {
        margin-bottom: 1.5rem;
    }

    .checkbox-wrap {
        margin-top: 1rem;
    }

    .tab-grid input[type="checkbox"] {
        width: initial;
        margin: 0 1rem 0 0;
    }

    .cash-delivery {
        font-size: .9rem;
        opacity: 0.5;
        color: #000;
        font-weight: 500;
    }

    .summary-container {
        margin-top: 2rem;
    }

    .product-image {
        height: 4rem;
        width: 4rem;
        border-radius: 5px;
    }

    .product-name {
        padding-bottom: .4rem;
    }

    .product-price,
    .title,
    .product-quantity {
        color: #000;
        opacity: 0.5;
    }

    .product-summary {
        margin-top: 1.5rem;
    }

    .product-summary li {
        margin-bottom: 1.5rem;
    }

    li > .flex {
       justify-content: space-between;
       width: 100%; 
       margin-left: 1.2rem;
       align-items: baseline;
    }

    .total-wrap {
        justify-content: space-between;
        margin-bottom: .5rem;
    }

    .price {
        font-size: 1.2rem;
    }

    .title {
        font-size: 500 ;
    }

    .grand {
        margin-top: 1.5rem;
    }

    .grand > .price {
        color: #D87D4A;
    }

    
@media screen and (min-width: 700px) {
    .tab-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .tab-grid input{
        margin: .5rem 0 0 0;
    }

    .orange {
        margin: 4.5rem 0 1.5rem;
    }

    .tab-flex {
        display: grid;
        grid-template-columns: auto auto;
        gap: 40px;
        margin-top: 2rem;
    }
}
</style>