import "bootstrap";
import './assets/scss/app.scss'
import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router'
import { Skeletor } from 'vue-skeletor';
import 'vue-skeletor/dist/vue-skeletor.css';


const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.component(Skeletor.name,Skeletor)
app.use(pinia)
app.mount('#app')
