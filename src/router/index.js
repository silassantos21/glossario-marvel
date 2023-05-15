import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Instrucoes from '../views/Instrucoes.vue'
import BuscarPersonagens from '../views/BuscarPersonagens.vue'
import PerfilPersonagem from '../views/PerfilPersonagem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/instrucoes',
    name: 'instrucoes',
    component: Instrucoes
  },
  {
    path: '/getdata',
    name: 'buscar_personagens',
    component: BuscarPersonagens
  },
  {
    path: '/data',
    name: 'perfil_personagem',
    component: PerfilPersonagem
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
