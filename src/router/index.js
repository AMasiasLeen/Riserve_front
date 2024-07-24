import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import AdminView from '../views/AdminView.vue'
import LoginForm from '../components/LoginForm.vue' // Importa el nuevo componente

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/login', // Nueva ruta para el formulario de inicio de sesión
    name: 'login',
    component: LoginForm
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
