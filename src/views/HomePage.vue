<template>
  <div class="home-page">
    <h1>Negocios</h1>
    <section>
      <swiper :slides-per-view="3" space-between="20" class="mySwiper">
        <swiper-slide v-for="(business, index) in businesses" :key="index">
          <router-link :to="{ name: 'business-detail', params: { id: business.id } }">
            <div class="card">
              <img :src="business.image" alt="business.name" />
              <div class="card-content">
                <h3>{{ business.name }}</h3>
                <p>{{ business.description }}</p>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const businesses = ref([]);

onMounted(() => {
  // Simulación de datos
  businesses.value = [
    {
      id: 1,
      name: 'SUBWAY',
      description: 'LOS MEJORES SANGUCHITOS DE LATINOAMERICA',
      image: 'https://cnnespanol.cnn.com/wp-content/uploads/2023/07/image-244.png?w=940&h=530&crop=1'
    },
    {
      id: 2,
      name: 'Otro negocio',
      description: 'Descripción del otro negocio',
      image: 'https://example.com/image2.jpg'
    }
  ];
});
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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
