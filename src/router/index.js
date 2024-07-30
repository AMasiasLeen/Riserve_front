import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomePage.vue';
import AdminView from '../views/AdminView.vue';
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
import BusinessesView from '../views/BusinessesView.vue';
import MenuView from '../views/MenusView.vue';
import BusinessDetail from '../views/BusinessDetail.vue';
import ReservationForm from '../views/ReservationForm.vue';
import ReservationDetail from '../views/ReservationDetail.vue';

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
        name: 'admin-businesses',
        component: BusinessesView
      },
      {
        path: 'menus',
        name: 'admin-menus',
        component: MenuView
      },
      // Agrega otras rutas secundarias del panel de administración aquí
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterForm
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
  },
  {
    path: '/reservation/:reservationId',
    name: 'reservation-detail',
    component: ReservationDetail
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
