<!-- src/views/BusinessesView.vue -->
<template>
  <div class="businesses-container">
    <div
      v-for="(business, index) in businesses"
      :key="index"
      class="business-card"
      @click="goToMenus(business.name)"
    >
      <img :src="business.image" :alt="business.name" class="business-image" />
      <div class="business-info">
        <h3>{{ business.name }}</h3>
        <p>{{ business.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const businesses = ref([
  {
    name: 'AMERICAN DELI',
    description: 'LOS MEJORES PLATOS PARA DESAYUNAR Y ALMORZAR',
    image: 'https://tb-static.uber.com/prod/image-proc/processed_images/02b67413ff086e0dc5cd6ca899cb62aa/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg'
  },
  {
    name: 'POLLO FELIZ',
    description: 'LOS MAS RICOS POLLOS FELICES',
    image: 'https://scontent.fuio24-1.fna.fbcdn.net/v/t39.30808-6/306788187_5426784020692215_8659909672462784373_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE5w0cXij7LeD-dnxO09aa4DuX6U3mnJaQO5fpTeaclpFT3PZbqt4jizlFVIviIlmSIllRYwUXf5frdGIfA45Kg&_nc_ohc=Kp5MCPwOofIQ7kNvgFgkqah&_nc_ht=scontent.fuio24-1.fna&oh=00_AYDIOYqXz5EYGYdyhldk73i1lBonT7C9fZITAlmQPjlqaw&oe=66A8FACA'
  },
  {
    name: 'SUBWAY',
    description: 'LOS MEJORES SANGUCHITOS',
    image: 'https://www.bloomberglinea.com/resizer/v2/YXEISR6SLRGXZMWWGSVZJBVYHY.jpg?auth=7a8a4ee76271fb3d91d11327570565b2516e01c8de44de5a78aa772bdabdb4bb&width=800&height=533&quality=80&smart=true'
  }
]);

function goToMenus(businessName) {
  router.push(`/admin/menus/${businessName}`);
}
</script>

<style scoped>
.businesses-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  max-width: 1200px; /* Ancho máximo del contenedor */
  margin: 0 auto; /* Centrar el contenedor */
  padding: 2rem; /* Espaciado alrededor del contenedor */
}

.business-card {
  width: 250px; /* Ancho fijo de las tarjetas */
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.business-card:hover {
  transform: scale(1.05);
}

.business-image {
  width: 100%;
  height: auto;
}

.business-info {
  padding: 1rem;
  text-align: center;
}

.business-info h3 {
  margin: 0 0 0.5rem 0;
}

.business-info p {
  margin: 0;
}
</style>
