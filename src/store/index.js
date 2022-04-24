import { createStore } from 'vuex'
import data from './../data.json'

const store = createStore({
    state () {
        return {
          productList: data,
          cart: [],
        }
    }, 
})

export default store;

