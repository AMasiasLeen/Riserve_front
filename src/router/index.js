import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import AdminView from '../views/AdminView.vue'
import LoginForm from '../components/LoginForm.vue'
import BusinessesView from '../views/BusinessesView.vue'
import MenuView from '../views/MenusView.vue'
import BusinessDetail from '../views/BusinessDetail.vue'
import ReservationForm from '../views/ReservationForm.vue'

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
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/negocios',
    name: 'businesses',
    component: BusinessesView
  },
  {
    path: '/menus',
    name: 'menus',
    component: MenuView
  },
  {
    path: '/business/:id',
    name: 'business-detail',
    component: BusinessDetail
  },
  {
    path: '/business/:businessId/reservation',
    name: 'reservation',
    component: ReservationForm
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
