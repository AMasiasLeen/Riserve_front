<!-- src/views/AdminView.vue -->
<template>
  <div class="admin-container">
    <aside class="sidebar">
      <div class="sidebar-brand" @click="goHome">
        <img src="" alt="Logo">
        <h1>restaurantmg</h1>
      </div>
      <ul class="sidebar-menu">
        <li class="sidebar-item">
          <i class="icon">📁</i>
          <span>NEGOCIOS</span>
        </li>
        <li class="sidebar-item">
          <i class="icon">📂</i>
          <span>MENUS</span>
        </li>
        <li class="sidebar-item">
          <i class="icon">🗂️</i>
          <span>RESERVACIONES</span>
        </li>
        <li class="sidebar-category">Configuraciones</li>
        <li class="sidebar-item">
          <i class="icon">👤</i>
          <span>Mi Perfil</span>
          <span class="detail">Detail</span>
        </li>
        <li class="sidebar-item">
          <i class="icon">⚙️</i>
          <span>Opciones</span>
          <span class="detail">Detail</span>
        </li>
        <li class="sidebar-item" @click="handleLogout">
          <i class="icon">🚪</i>
          <span>Logout</span>
        </li>
      </ul>
      <div class="sidebar-footer">
        <i class="icon">📄</i>
        <span>sobre la pagina</span>
      </div>
    </aside>
    <main class="admin-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuth } from '../auth';

const router = useRouter();
const { logout } = useAuth();

function goHome() {
  router.push('/');
}

function handleLogout() {
  logout();
  router.push('/');
}
</script>

<style scoped>
.admin-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
}

.sidebar-menu {
  flex-grow: 1;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}

.sidebar-item:hover {
  background-color: #e0e0e0;
}

.sidebar-category {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.sidebar-footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.icon {
  font-size: 1.2rem;
}

.detail {
  margin-left: auto;
}
</style>
