<template>
  <div class="home-page">
    <h1>Negocios</h1>
    <section>
      <swiper :slides-per-view="3" space-between="20" class="mySwiper">
        <swiper-slide v-for="(business, index) in businesses" :key="index">
          <router-link :to="{ name: 'business-detail', params: { id: business.businessID } }">
            <div class="card">
              <img :src="business.image" :alt="business.name" />
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

  const token = sessionStorage.getItem("token")

  const options = {
    method: 'GET',
    url: 'http://localhost:3000/api/v1/businesses',
    headers: {
      Authorization: `Bearer ${token}`
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
  font-family: 'Roboto', sans-serif;
}

.home-page h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.mySwiper {
  padding: 2rem 0;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  color: #e91e63;
}

.card p {
  margin: 0;
  color: #666;
}
</style>