import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from '/Users/sinemalageyik/Desktop/vue/to-do-app/to-do-list/src/components/Header.vue'
import Dropdown from '/Users/sinemalageyik/Desktop/vue/to-do-app/to-do-list/src/components/Dropdown.vue'

const app = createApp(App)
app.component('Header', Header)
app.component('Dropdown', Dropdown)
app.use(router)

app.mount('#app')
