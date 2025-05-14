import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import DizimosPage from '../pages/DizimosPage.vue'
import DadosBancariosPage from '../pages/DadosBancariosPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/dizimos',
    name: 'Dizimos',
    component: DizimosPage
  },
  {
    path: '/dadosbancarios',
    name: 'DadosBancarios',
    component: DadosBancariosPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
