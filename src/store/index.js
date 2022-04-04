import { createStore } from 'vuex'
import data from './../../data.json'

const store = createStore({
    state () {
        return {
          productList: data,
          //products: [],
         // productId: this.$route.params.productId
        }
    },    
})

export default store;

