import App from './App.vue'
import router from './router'
import './styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'

import fontAwesomeIcons from './assets/fontAwesomeIcons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(createPinia())
app.use(router)

library.add(...fontAwesomeIcons)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
