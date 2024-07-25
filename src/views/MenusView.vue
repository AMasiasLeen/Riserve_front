<!-- src/views/MenusView.vue -->
<template>
  <div class="menus-view">
    <h2>Menús de {{ businessName }}</h2>
    <div class="card-container">
      <div v-for="(menu, index) in menus" :key="index" class="card">
        <img :src="menu.image" alt="menu.name" />
        <div class="card-content">
          <h3>{{ menu.name }}</h3>
          <p>{{ menu.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const businessName = ref(route.params.businessName);

const menus = [
  {
    name: 'Menú 1',
    description: 'Descripción del menú 1',
    image: '/path_to_image4.jpg'
  },
  {
    name: 'Menú 2',
    description: 'Descripción del menú 2',
    image: '/path_to_image5.jpg'
  },
  {
    name: 'Menú 3',
    description: 'Descripción del menú 3',
    image: '/path_to_image6.jpg'
  }
];
</script>

<style scoped>
.menus-view {
  padding: 2rem;
}

.card-container {
  display: flex;
  gap: 1rem;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 1rem;
}

.card h3 {
  margin: 0 0 0.5rem 0;
}

.card p {
  margin: 0;
}
</style>
