import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

// ========================
// App banao
// ========================
const app = createApp(App)

// ========================
// Plugins add karo
// ========================
app.use(createPinia())  // State management
app.use(router)         // Routing

// ========================
// App mount karo
// ========================
app.mount('#app')