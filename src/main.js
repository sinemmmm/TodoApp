import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Dropdown from './components/Dropdown.vue'

const app = createApp(App)
app.component('Dropdown', Dropdown)
app.use(router)

app.mount('#app')
