import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons'

import '@/utilities/validator'

/* add icons to the library */
library.add([faBars, faPlus])


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Toastify from 'vue3-toastify'

const app = createApp(App)

app.use(router)
app.use(Vue3Toastify, {autoClose: 3000});

app.component('Icon', FontAwesomeIcon);

app.mount('#app')
