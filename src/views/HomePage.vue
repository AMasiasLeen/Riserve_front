<script setup>
import restaurantS from "../components/service_images.vue"
import { ref } from 'vue';
import axios from "axios";

async function take() {
    const resultado = await axios.get("api/restaurant/businesses", { headers: { "Content-Type": "application/json" } })
    console.log(resultado)
}

const res1 = ref([
    {
        img: "12",
        name: "SAID DUBAI",
        dirr: "AV. CHONE"

    },

    {
        img: "12",
        name: "SUBWAY",
        dirr: "SHOPPING"

    },


    {
        img: "12",
        name: "KFC",
        dirr: "SHOPPING"

    }
])

take()

</script>

<template>
    <div class="container">
        <div v-for="rs in res1" :key="rs.name" class="card">
            <restaurantS :restaurante="rs"></restaurantS>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
}

.card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 200px;
    padding: 1rem;
    text-align: center;
}

.card img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
}

.card h2 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
}

.card p {
    margin: 0;
    color: #555;
}
</style>
