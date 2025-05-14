import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1E3A8A',    // Azul escuro principal
          secondary: '#3B82F6',  // Azul médio
          accent: '#60A5FA',     // Azul claro
          background: '#EFF6FF', // Fundo azul bem claro
          surface: '#FFFFFF',    // Superfície branca
          error: '#DC2626',      // Vermelho para erros
        }
      }
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
