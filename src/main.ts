import App from './App.vue'
import router from './router'
import './styles/index.scss'
import 'vue-toastify-3/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { createToastifyPlugin } from 'vue-toastify-3'

import fontAwesomeIcons from './assets/fontAwesomeIcons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createToastifyPlugin, { autoClose: 3000, closeOnClick: true, pauseTimerOnHover: true })

library.add(...fontAwesomeIcons)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
