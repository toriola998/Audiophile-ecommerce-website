import { createStore } from 'vuex'
import data from './../data.json'

const store = createStore({
    state () {
        return {
          productList: data,
          cart: [],
          noOfItems: 0,
          //products: [],
         // productId: this.$route.params.productId
        }
    }, 
    mutations: {
        ADD_TO_CART(state, payload) {
            const check = state.cart.filter( (item) => {
                item.id === payload.id
            })

            if(check.length == 0) {
                state.cart.push(payload);
            }else {
                
            }
        },

        NO_OF_ITEMS(state, payload) {
            state.noOfItems += payload
        }
    },
    getters: {
        RETURN_CART(state) {
            //return state.cart
            const str = JSON.stringify(state.cart)
            return  JSON.parse(str)
        },

        // SOMETHING(state) {
        // }
    },
    actions: {
        addToCart({commit}, payload) {
            commit('ADD_TO_CART', payload)
        }, 

        items({commit}, payload) {
            commit('NO_OF_ITEMS', payload)
        }
    }

})

export default store;

