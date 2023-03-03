import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'

import App from './App.vue'
import router from './router'
import components from './components/UI'

import './assets/main.css'

const app = createApp(App)

components.forEach((item) => {
  app.component(item.name, item)
})

app.use(createPinia()).use(VueCookies).use(router).mount('#app')
