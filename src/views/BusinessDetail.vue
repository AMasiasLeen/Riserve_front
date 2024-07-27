<template>
  <div class="business-detail">
    <img :src="business.image" alt="business.name" />
    <h1>{{ business.name }}</h1>
    <p>{{ business.description }}</p>
    <button @click="goToReservation">Reservar</button>
    <section>
      <h2>Menús/Productos</h2>
      <swiper :slides-per-view="3" space-between="20" class="mySwiper">
        <swiper-slide v-for="(menu, index) in menus" :key="index">
          <div class="card">
            <img :src="menu.image" alt="menu.name" />
            <div class="card-content">
              <h3>{{ menu.name }}</h3>
              <p>{{ menu.description }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const business = ref({});
const menus = ref([]);

const route = useRoute();
const router = useRouter();

const goToReservation = () => {
  router.push({ name: 'reservation', params: { businessId: route.params.id } });
};

onMounted(() => {
  const businessId = route.params.id;
  // Simulación de datos
  business.value = {
    name: 'SUBWAY',
    description: 'LOS MEJORES SANGUCHITOS DE LATINOAMERICA',
    image: 'https://cnnespanol.cnn.com/wp-content/uploads/2023/07/image-244.png?w=940&h=530&crop=1'
  };
  menus.value = [
    {
      name: 'SANDUCHE DE PERNIL',
      description: 'UN SANGUCHITO DE PERNIL',
      image: 'https://www.bloomberglinea.com/resizer/v2/YXEISR6SLRGXZMWWGSVZJBVYHY.jpg?auth=7a8a4ee76271fb3d91d11327570565b2516e01c8de44de5a78aa772bdabdb4bb&width=800&height=533&quality=80&smart=true'
    },
    {
      name: 'Menú Ejemplo 2',
      description: 'TUVIEJA',
      image: 'path_to_menu_image2.jpg'
    }
  ];
});
</script>

<style scoped>
.business-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.business-detail img {
  width: 100%;
  height: auto;
}

button {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
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
