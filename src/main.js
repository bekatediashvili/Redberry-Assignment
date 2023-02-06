import {createApp} from 'vue'
import './style.css'
import router from "./router/index.js";
import {createPinia} from "pinia";
import App from './App.vue'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
