<!-- src/views/AdminView.vue -->
<template>
  <div class="admin-container">
    <aside class="sidebar">
      <div class="sidebar-brand" @click="goHome">
        <img src="https://cdn.prod.website-files.com/6423e8cf97045d0ac6e9ffb9/6565d9491a89f4b7b7915b3e_tipos%20de%20restaurante.jpg" alt="Logo">
        <h1>restaurantmg</h1>
      </div>
      <ul class="sidebar-menu">
        <li class="sidebar-item" @click="goToBusinesses">
          <div class="sidebar-item-container">
            <i class="icon">📁</i>
            <span>NEGOCIOS</span>
          </div>
        </li>
        <li class="sidebar-item">
          <div class="sidebar-item-container">
            <i class="icon">🗂️</i>
            <span>RESERVACIONES</span>
          </div>
        </li>
        <li class="sidebar-category">Configuraciones</li>
        <li class="sidebar-item">
          <div class="sidebar-item-container">
            <i class="icon">👤</i>
            <span>Mi Perfil</span>
          </div>
        </li>
        <li class="sidebar-item">
          <div class="sidebar-item-container">
            <i class="icon">⚙️</i>
            <span>Opciones</span>
          </div>
        </li>
        <li class="sidebar-item" @click="handleLogout">
          <div class="sidebar-item-container">
            <i class="icon">🚪</i>
            <span>Logout</span>
          </div>
        </li>
      </ul>
      <div class="sidebar-footer">
        <i class="icon">📄</i>
        <span>sobre la pagina</span>
      </div>
    </aside>
    <main class="admin-content">
      <div class="admin-header">
        <h1>Administración</h1>
      </div>
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

function goToBusinesses() {
  router.push('/admin/businesses');
}
</script>

<style scoped>
.admin-container {
  display: flex;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  background-color: #1a1a1a;
  color: #fff;
}

.sidebar {
  width: 250px;
  background-color: #2c2c2c;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
}

.sidebar-brand img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.sidebar-brand h1 {
  font-size: 1.5rem;
  color: #e91e63;
}

.sidebar-menu {
  flex-grow: 1;
}

.sidebar-item {
  margin-bottom: 1rem;
}

.sidebar-item-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  background-color: #333;
  transition: background-color 0.2s ease-in-out;
}

.sidebar-item-container:hover {
  background-color: #444;
}

.sidebar-category {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #aaa;
  padding: 0 1rem;
}

.sidebar-footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #444;
  background-color: #2c2c2c;
}

.icon {
  font-size: 1.2rem;
  color: #fff;
}

.admin-content {
  flex-grow: 1;
  padding: 2rem;
  background-color: #121212;
  overflow-y: auto;
}

.admin-header {
  background-color: #333;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.admin-header h1 {
  margin: 0;
  font-size: 1.5rem;
}
</style>
