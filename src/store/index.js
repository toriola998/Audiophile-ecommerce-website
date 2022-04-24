import { createStore } from 'vuex'
import data from './../data.json'

const store = createStore({
    state () {
        return {
          productList: data,
          cart: [],
          //products: [],
         // productId: this.$route.params.productId
        }
    }, 
    mutations: {
        ADD_TO_CART(state, payload) {
            state.cart.push(payload);
        }
    },
    getters: {
        RETURN_CART(state) {
            //return state.cart
            const str = JSON.stringify(state.cart)
            return  JSON.parse(str)
        }
    }

})

export default store;

