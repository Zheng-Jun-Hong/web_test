import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

//element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-tw'


const vm = createApp(App).use(router)
vm.use(router)
vm.use(ElementPlus, {locale})
vm.mount('#app')
