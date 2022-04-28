<template>
    <NavBar />
    <main class="checkout-container" role="main">
        <div>
            <div>
                <div class="checkout-inner">
                    <form>
                        <h1>CHECKOUT</h1> 
                        <p class="orange">BILLING DETAILS</p>
                        <div class="tab-grid">
                            <div>
                                <span class="flex">
                                    <label for="name" :class="{ labelErrorColor: nameError }">Name</label><br>
                                    <span class="err" v-if="nameError">Name can't be empty</span>
                                </span>
                                <input type="text" :class="{ borderErrorColor: nameError }" placeholder="Alexei Ward" id="name" v-model="name"/>
                            </div>

                            <div>
                                <span class="flex">
                                    <label for="email" :class="{ labelErrorColor: emailError }">Email</label><br>
                                    <span class="err" v-if="emailError">Email can't be empty</span>
                                    <span class="err" v-if="invalidEmailError">Wrong format</span>
                                </span>
                                <input type="email" :class="{ borderErrorColor: emailError }" placeholder="alexei@gmail.com" id="email" v-model="email"/>
                            </div>

                            <div>
                                <span class="flex">
                                    <label for="number" :class="{ labelErrorColor: phoneError }" >Number</label><br>
                                    <span class="err" v-if="phoneError">Fill in your number</span>
                                    <span class="err" v-if="invalidPhoneError">Incorrect Phone number</span>
                                </span>
                                <input :class="{ borderErrorColor: phoneError }" type="tel" placeholder="+1 202-555-0136" id="number" 
                               v-model="phoneNumber"/>
                            </div>
                        </div> 

                        <p class="orange">SHIPPING INFO</p>
                        <div>
                            <span class="flex">
                                <label for="address" :class="{ labelErrorColor: addressError }" >Address</label><br>
                                <span class="err" v-if="addressError">Provide detailed address</span>
                            </span>
                            <input :class="{ borderErrorColor: addressError }"  type="text" placeholder="1137 Williams Avenue" id="address" v-model="address"/>
                        </div>

                        <div class="tab-grid">
                            <div>
                                <span class="flex">
                                    <label for="zip-code" :class="{ labelErrorColor: zipCodeError }" >Zip Code</label><br>
                                    <span class="err" v-if="zipCodeError">Privide zip code</span>
                                    <span class="err" v-if="zipNanError">Must be a number</span>
                                </span>
                                <input :class="{ borderErrorColor: zipCodeError }" type="number" placeholder="10001" id="zip-code" v-model="zipCode"/>
                            </div>

                            <div>
                                <span class="flex">
                                    <label for="city" :class="{ labelErrorColor: cityError }" >City</label><br>
                                    <span class="err" v-if="cityError">Provide city</span>
                                </span>
                                <input :class="{ borderErrorColor: cityError }" type="text" placeholder="New York" id="city" v-model="city"/>
                            </div>

                            <div>
                                <span class="flex">
                                    <label for="country" :class="{ labelErrorColor: countryError }" >Country</label><br>
                                    <span class="err" v-if="countryError">Provide country</span>
                                </span>
                                <input type="text" :class="{ borderErrorColor: countryError }" placeholder="United States" id="country" v-model="country"/>
                            </div>
                        </div> 
                        <p class="orange">PAYMENT DETAILS</p>
                        <div class="tab-grid">
                            <p class="sub-heading">Payment Method</p>
                            <div class="checkbox-container">
                                <div class="flex checkbox-wrap">
                                    <input type="radio" id="e-money" name="payment" v-model="eMoney" checked />
                                    <label for="e-money">e-Money</label>
                                </div>

                                <div class="flex checkbox-wrap">
                                    <input type="radio" id="cash-on-delivery" name="payment" v-model="cashOnDelivery" />
                                    <label for="cash-on-delivery">Cash on delivery</label>
                                </div>   
                            </div>
                        </div>

                        <div class="tab-grid"> 
                            <div>
                                <label for="e-money-number">e-money Number</label><br>
                                <input type="number" placeholder="238521993" id="e-money-number" v-model="eMoneyNumber" />
                            </div>

                            <div>
                                <label for="e-money-pin">e-money PIN</label><br>
                                <input type="number" placeholder="6891" id="e-money-pin" v-model="eMoneyPin" />
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
                            <li class="flex" v-for="item in cart" :key="item.id"> 
                                <img src="./../assets/cart/image-zx9-speaker.jpg"  class="product-image" alt=""/>
                                <div class="flex ">
                                    <p>
                                        <span class="product-name"> {{ item.name }} </span><br>
                                        <span class="product-price">{{ item.price}}</span>
                                    </p>
                                    <span class="product-quantity">*1</span>
                                </div>
                            </li>
                        </ul>
                        
                        <ul>
                            <li class="flex total-wrap">
                                <span class="title">TOTAL</span>
                                <span class="price"> $ {{cartTotalAmount}}</span>
                            </li>
                            <li class="flex total-wrap">
                                <span class="title">SHIPPING</span>
                                <span class="price">$ 50 </span>
                            </li>
                            <li class="flex total-wrap">
                                <span class="title">VAT (INCLUDED)</span>
                                <span class="price">$ {{ VAT }}</span>
                            </li>
                            <li class="flex total-wrap grand">
                                <span class="title">GRAND TOTAL</span>
                                <span class="price">$ {{ grandTotal }}</span>
                            </li>
                        </ul>
                        <!--click="showCard = !showCard"-->
                        <OrangeButton @click="payForProducts()" btnAction="CONTINUE" class="continue"/>
                        <teleport to="body">
                            <div v-show="showCard"
                                @click.self.stop.prevent ="showCard = !showCard"
                                class="modal-overlay">
                                <ThankYouCard v-show="showCard"/>
                            </div>
                        </teleport>
                    </section>
                </div>
            </div>
        </div>
    </main>
    <TheFooter />
</template>

<script>
import NavBar from './../components/NavBar.vue'
import OrangeButton from './../components/OrangeButton.vue'
import ThankYouCard from './../components/ThankYouCard.vue'
import TheFooter from './../components/TheFooter.vue'
export default {
    name: 'Checkout',
    components: {
        NavBar,
        OrangeButton,
        ThankYouCard,
        TheFooter
    },
    data () {
        return {
            showCard: false,
            name: "",
            email: "",
            message: "",
            phoneNumber: "",
            address: "",
            zipCode: "",
            city: "",
            country: "",
            nameError: false,
            emailError: false,
            invalidEmailError: false,
            phoneError: false,
            invalidPhoneError: false,
            addressError: false,
            zipCodeError: false,
            zipNanError: false,
            cityError: false,
            countryError: false,
        }
    },
    methods: {
        validEmail (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        //  validatePhoneNumber(number) {
        //     var re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;
        //     return re.test(number);
        // },

        payForProducts() {
            console.log('redddd')
             /*******FORM VALIDATION FOR NAME INPUT FIELD */
            if(!this.name) { //if email field is empty
                this.nameError = true //show error message
            }else {
                this.nameError = false //remove error message if input field isn't empty
            }

            /*******FORM VALIDATION FOR EMAIL INPUT FIELD */
            if(!this.email) {  //if email field is empty
                this.emailError = true  //show "can't be empty"
            } else if (!this.validEmail(this.email)) {   //if it isn,t empty but its invalid
                    this.invalidEmailError = true  // show "invalid email"
                    this.emailError = false   //remove cant be empty since it's not empty, just invalid
            } else {
                this.emailError = false
                this.invalidEmailError = false
            }

            /*******FORM VALIDATION FOR PHONE-NUMBER INPUT FIELD */
            if(!this.phoneNumber) {  //if phone field is empty
                this.phoneError = true  //show "can't be empty"
            } else if (!this.validatePhoneNumber(this.phoneNumber)) {   //if it isn,t empty but its invalid
                    this.invalidPhoneError = true  // show "invalid phone number"
                    this.phoneError = false   //remove cant be empty since it's not empty, just invalid
            } else {
                this.phoneError = false
                this.invalidPhoneError = false
            }

            /*******FORM VALIDATION FOR ADDRESS INPUT FIELD */
            if(!this.address) { //if address field is empty
                this.addressError = true //show error message
            }else {
                this.addressError = false //remove error message if input field isn't empty
            }

            /*******FORM VALIDATION FOR ZIP-CODE INPUT FIELD */
            if(!this.zipCode) { //if zipCode field is empty
                this.zipCodeError = true //show error message

            }else if (isNaN(this.zipCode)){
                this.zipNanError = true //show error message
            }else {
                this.zipCodeError = false //remove error message if input field isn't empty
                this.zipNanError = false;
            }

            /*******FORM VALIDATION FOR CITY INPUT FIELD */
            if(!this.city) { //if zipCode field is empty
                this.cityError = true //show error message
            }else {
                this.cityError = false //remove error message if input field isn't empty
            }

            /*******FORM VALIDATION FOR COUNTRY INPUT FIELD */
            if(!this.country) { //if country field is empty
                this.countryError = true //show error message
            }else {
                this.countryError = false //remove error message if input field isn't empty
            }
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart
        },

        cartTotalAmount() {
            return this.$store.getters.cartTotalAmount
        },

        VAT() {
            return this.$store.getters.VAT
        },

        grandTotal() {
            return this.$store.getters.grandTotal;
        }
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

    span.flex {
        justify-content: space-between;
    }

    .err {
        font-size: .85rem;
        color: #CD2C2C;
    }

    .labelErrorColor {
        color: #CD2C2C;
    }

    .borderErrorColor{
        border: 2px solid #CD2C2C;
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

    input:hover,
    .checkbox-wrap:hover{
        border: 1px solid #D87D4A;
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

    .tab-grid input[type="radio"] {
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
    input::placeholder,
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

    .continue {
        margin: 2rem 0 0 0;
        width: 100%;
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
        margin: 3rem 0 1.5rem;
    }

    .tab-flex {
        display: grid;
        grid-template-columns: auto auto;
        gap: 40px;
    }

      form {
        padding: 2rem 1.5rem 4rem;
    }
}

@media screen and (min-width: 1000px) {
    .checkout-container {
        padding: 2rem 6rem;
    }

    form {
        width: 65%;
    }

    .summary-container {
        margin-top: initial;
        height: fit-content;
        height: -webkit-fit-content;
        height: -moz-fit-content;
        width: 35%;
    }

    .checkout-inner {
        display: flex;
        gap: 30px;
    }
}

@media screen and (min-width: 1200px) {
    .checkout-container {
        padding: 2rem 10rem;
    }
}
</style>