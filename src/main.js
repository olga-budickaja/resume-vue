import Vue, { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/js/my-materialize'
import VueResizeText from "vue3-resize-text"
import VueSVGIcon from 'vue-svgicon'

createApp(App)
    .use(VueResizeText)
    .use(VueSVGIcon)
    .use(store)
    .use(router)
    .mount('#app')
