import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

const vm = createApp(App)
vm.use(router)
vm.mount('#app')
