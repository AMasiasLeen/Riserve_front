<!-- src/views/BusinessesView.vue -->
<template>
  <div class="businesses-view">
    <h2>Negocios</h2>
    <div class="card-container">
      <div v-for="(business, index) in businesses" :key="index" class="card" @click="goToMenus(business)">
        <img :src="business.image" alt="business.name" />
        <div class="card-content">
          <h3>{{ business.name }}</h3>
          <p>{{ business.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const businesses = [
  {
    name: 'Negocio 1',
    description: 'Descripción del negocio 1',
    image: '/path_to_image1.jpg'
  },
  {
    name: 'Negocio 2',
    description: 'Descripción del negocio 2',
    image: '/path_to_image2.jpg'
  },
  {
    name: 'Negocio 3',
    description: 'Descripción del negocio 3',
    image: '/path_to_image3.jpg'
  }
];

function goToMenus(business) {
  router.push({ name: 'menus', params: { businessName: business.name } });
}
</script>

<style scoped>
.businesses-view {
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
  cursor: pointer;
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
