import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//createApp(App).mount('#app')
//createApp(App).use(router).mount('#app')
createApp(App).use(store).use(router).mount('#app')
