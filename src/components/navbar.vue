<!-- src/components/navbar.vue -->
<template>
  <nav class="navbar" v-if="!isAdminRoute && !isLoginRoute">
    <div class="navbar-brand" @click="goHome">RESTAURANTMG</div>
    <div class="navbar-menu">
      <div v-if="!isAuthenticated" @click="login" class="navbar-item">Iniciar Sesión</div>
      <div v-else class="navbar-item dropdown">
        <div @click="toggleDropdown" class="dropdown-trigger">{{ user.name }}</div>
        <div v-if="dropdownOpen" class="dropdown-menu">
          <div class="dropdown-item">Perfil</div>
          <div @click="logout" class="dropdown-item">Logout</div>
          <div @click="goToAdmin" class="dropdown-item">Administración</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuth } from '../auth';

const router = useRouter();
const route = useRoute();
const { isAuthenticated, user, logout } = useAuth();
const dropdownOpen = ref(false);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function login() {
  router.push('/login'); // Navega al formulario de inicio de sesión
}

function goToAdmin() {
  router.push('/admin');
}

function goHome() {
  router.push('/');
}

// Ocultar navbar en rutas de administración y de inicio de sesión
const isAdminRoute = ref(route.path.startsWith('/admin'));
const isLoginRoute = ref(route.path === '/login');

router.afterEach((to) => {
  isAdminRoute.value = to.path.startsWith('/admin');
  isLoginRoute.value = to.path === '/login';
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f3f3f3;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-item {
  margin-left: 1rem;
  cursor: pointer;
}

.dropdown {
  position: relative;
}

.dropdown-trigger {
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #333;
  color: #fff;
  padding: 0.5rem 0;
  border-radius: 4px;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
