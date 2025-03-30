import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import { createPinia } from "pinia"

const app = createApp(App);
const pinia = createPinia();

// Using Pinia correctly
app.use(pinia);  
app.use(router); // Add router after pinia
app.mount("#app");
