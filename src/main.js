import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const vm = createApp(App).use(router)
vm.use(router)
vm.mount('#app')
