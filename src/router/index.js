import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import AdminView from '../views/AdminView.vue'
import LoginForm from '../components/LoginForm.vue'
import BusinessesView from '../views/BusinessesView.vue'
import MenuView from '../views/MenusView.vue'
import BusinessDetail from '../views/BusinessDetail.vue' // Importa el nuevo componente

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path: 'businesses',
        name: 'businesses',
        component: BusinessesView
      },
      {
        path: 'menus/:businessName',
        name: 'menu',
        component: MenuView
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/business/:id', // Nueva ruta para la vista detallada del negocio
    name: 'BusinessDetail',
    component: BusinessDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
