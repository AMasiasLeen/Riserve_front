<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  restaurante: {
    type: Object,
    required: true
  }
});

const restaurant = ref(props.restaurante);
</script>

<template>
  <div>
    <img :src="restaurant.img" alt="">
    <span>{{ restaurant.name }}</span>
    <h3>{{ restaurant.dirr }}</h3>
  </div>
</template>
