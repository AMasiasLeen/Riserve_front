<!-- src/views/MenuView.vue -->
<template>
  <div class="menu-container">
    <h1>Menú de {{ businessName }}</h1>
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        {{ item.name }} - {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const businessName = route.params.businessName;
const menuItems = ref([]);

onMounted(() => {
  // Simula la carga de elementos del menú desde una API o una base de datos
  if (businessName === 'Negocio 1') {
    menuItems.value = [
      { name: 'Producto 1', price: '$10' },
      { name: 'Producto 2', price: '$15' },
    ];
  } else if (businessName === 'Negocio 2') {
    menuItems.value = [
      { name: 'Producto 3', price: '$20' },
      { name: 'Producto 4', price: '$25' },
    ];
  } else if (businessName === 'Negocio 3') {
    menuItems.value = [
      { name: 'Producto 5', price: '$30' },
      { name: 'Producto 6', price: '$35' },
    ];
  }
});
</script>

<style scoped>
.menu-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.menu-container ul {
  list-style-type: none;
  padding: 0;
}

.menu-container li {
  padding: 0.5rem 0;
}
</style>
