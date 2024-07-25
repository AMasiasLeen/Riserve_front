<template>
    <div class="home-page">
      <h1>Bienvenido a restaurantmg</h1>
      
      <section>
        <h2>Negocios</h2>
        <swiper :slides-per-view="3" space-between="20" class="mySwiper">
          <swiper-slide v-for="(business, index) in businesses" :key="index">
            <div class="card">
              <img :src="business.image" alt="business.name" />
              <div class="card-content">
                <h3>{{ business.name }}</h3>
                <p>{{ business.description }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </section>
      
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
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';

  import image1 from '@/assets/path_to_image1.jpg';
  import image2 from '@/assets/campero.jpg';
  import image3 from '@/assets/Subway.jpg';
  
  const businesses = [
    {
      name: 'Negocio 1',
      description: 'Descripción del negocio 1',
      image: image1
    },
    {
      name: 'Negocio 2',
      description: 'Descripción del negocio 2',
      image: image2
    },
    {
      name: 'Negocio 3',
      description: 'Descripción del negocio 3',
      image: image3
    },
    {
      name: 'Negocio 1',
      description: 'Descripción del negocio 1',
      image: image1
    },
    {
      name: 'Negocio 2',
      description: 'Descripción del negocio 2',
      image: image2
    },
    {
      name: 'Negocio 3',
      description: 'Descripción del negocio 3',
      image: image3
    },
    // Añadir más negocios si es necesario
  ];
  
  const menus = [
    {
      name: 'Menú 1',
      description: 'Descripción del menú 1',
      image: 'path_to_image4.jpg'
    },
    {
      name: 'Menú 2',
      description: 'Descripción del menú 2',
      image: 'path_to_image5.jpg'
    },
    {
      name: 'Menú 3',
      description: 'Descripción del menú 3',
      image: 'path_to_image6.jpg'
    },
    // Añadir más menús si es necesario
  ];
  </script>
  
  <style scoped>
  .home-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  section {
    margin-bottom: 2rem;
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
  