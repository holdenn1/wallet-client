import App from './App.vue'
import './styles/index.scss'
import 'vue-toastify-3/style.css'
import CustomFormInput from 'ui/inputs/CustomFormInput.vue'
import CustomMainButton from 'ui/buttons/MainButton.vue'

import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createToastifyPlugin } from 'vue-toastify-3'

import fontAwesomeIcons from './assets/fontAwesomeIcons'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createToastifyPlugin, { autoClose: 3000, closeOnClick: true, pauseTimerOnHover: true })

library.add(...fontAwesomeIcons)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('CustomFormInput', CustomFormInput)
app.component('CustomMainButton', CustomMainButton)

app.mount('#app')
