import { createStore } from 'vuex'
import data from './../data.json'

const store = createStore({
    state () {
        return {
          productList: data,
          cart: [],
          productQuantity: 1,
          grandTotal: 0,
          vat: 20/100,
        }
    }, 

    getters: {
        cartSize(state) {
            return state.cart.length;
        },

        cartTotalAmount: (state) => {
            return state.cart.reduce((total, product) => {
                return total + (product.productPrice * product.quantity);
            }, 0);
        },

        VAT(state, getters){
            return parseInt(state.vat * getters.cartTotalAmount)
        },

        grandTotal(state, getters) {
            return  state.grandTotal + getters.cartTotalAmount + getters.VAT + parseInt(50)
        }
    },

    mutations: {
        addToCart: (state, payload) => {
            //1. find the product in the products list
            //2. find the product in the cart list
            let cartProduct = state.cart.find((product) => product.id === payload.productId);

            //CHECK IF ANY ITEM IN THE CART HAS AN id THAT MATCHES THAT OF THE ONE YOU'RE CURRENTLY ADDING  
            if (cartProduct) {
                //product already present in the cart. so increase the quantity
                cartProduct.payload.quantity++
                //cartProduct.qu++;
            } else {
                state.cart.push(
                    // product newly added to cart
                    payload
                );
            }
        },
    }
})

export default store;

