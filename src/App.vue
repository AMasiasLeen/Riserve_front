<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/navbar.vue'

const route = useRoute();
</script>

<template>
  <div>
    <!-- Mostrar Navbar solo si la ruta no es '/login', '/register', ni ninguna que empiece con '/admin' -->
    <Navbar v-if="route.path !== '/login' && route.path !== '/register' && !route.path.startsWith('/admin')" />
    <router-view />
  </div>
</template>

<style scoped></style>
