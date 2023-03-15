import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
import School from './School.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })
createApp(School).use(vuetify).mount('#app')
