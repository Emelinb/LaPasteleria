import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Productos from '../views/Productos.vue'
import Nosotros from '../views/Nosotros.vue'
import Postres from '../views/Postres.vue'
import Contacto1 from '../views/Contacto1.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/postres',
    name: 'Postres',
    component: Postres
  },
  {
    path: '/contacto1',
    name: 'Contacto1',
    component: Contacto1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
