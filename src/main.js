import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import { createPinia } from "pinia"

const app = createApp(App);
app.use(createPinia()); // فعال کردن Pinia
app.use(router); // اگر Router داری
app.mount("#app");
