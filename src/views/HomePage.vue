<template>
  <div class="home-page">
    <h1>Negocios</h1>
    <section>
      <swiper :slides-per-view="3" space-between="20" class="mySwiper">
        <swiper-slide v-for="(business, index) in businesses" :key="index">
          <router-link :to="{ name: 'business-detail', params: { id: business.businessID } }">
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
import axios from "axios";

const businesses = ref([]);

onMounted(() => {
  // Simulación de datos
  businesses.value = [
  ];
});

async function addbusinesses() {

const options = {
  method: 'GET',
  url: 'http://localhost:3000/api/v1/businesses',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDY1NDc4OSwidXNlcl9uYW1lIjoiQ2FybGl0b3MiLCJ1c2VyX21haWwiOiJjb3JyZW9AZWplbXBsby5jb20iLCJ1c2VyX3BsYW4iOiJGcmVlbWl1bSIsImlhdCI6MTcyMjEwMTAwMSwiZXhwIjoxNzIyMTA0NjAxfQ.snapOvq4ofKVZuILZF9rED1vv49fZsHRC9sFQ2C9Ivc'
  }
};
  axios.request(options).then(function (response) {
    console.log(response.data);
    businesses.value=response.data.result
  }).catch(function (error) {
    console.error(error);
  });
}

addbusinesses()

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
