import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import AdminView from '../views/AdminView.vue'
import LoginForm from '../components/LoginForm.vue'
import BusinessesView from '../views/BusinessesView.vue'
import MenusView from '../views/MenusView.vue'

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
        name: 'menus',
        component: MenusView
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
