<template>
    <div class="reservation-detail">
        <h2>Detalle de Reservación</h2>
        <p><strong>Cédula:</strong> {{ reservation.user_ced }}</p>
        <p><strong>Nombre:</strong> {{ reservation.user_name }}</p>
        <p><strong>Apellido:</strong> {{ reservation.user_lastname }}</p>
        <p><strong>Teléfono:</strong> {{ reservation.user_phone }}</p>
        <p><strong>Correo:</strong> {{ reservation.user_mail }}</p>
        <p><strong>Fecha de Reservación:</strong> {{ reservation.reservation_date }}</p>
        <p><strong>Fecha de Creación:</strong> {{ reservation.creation_date }}</p>
        <p><strong>Número de Mesa:</strong> {{ reservation.table_number }}</p>
        <p><strong>Valor:</strong> {{ reservation.reservation_value }}</p>
        <p><strong>Transacción:</strong> {{ reservation.transaction_data }}</p>
        <p><strong>Detalles del Producto:</strong> {{ reservation.product_details }}</p>
        <button @click="goHome">Volver a la página principal</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const reservation = ref({});
const route = useRoute();
const router = useRouter();

onMounted(async () => {
    const reservationId = route.params.reservationId;
    try {
        const response = await axios.get(`http://localhost:3000/api/v1/reservations/${reservationId}`);
        reservation.value = response.data;
    } catch (error) {
        console.error('Error al obtener los detalles de la reservación:', error);
    }
});

function goHome() {
    router.push('/');
}
</script>

<style scoped>
.reservation-detail {
    max-width: 600px;
    margin: 50px auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.reservation-detail h2 {
    text-align: center;
    margin-bottom: 1rem;
}

.reservation-detail p {
    margin-bottom: 1rem;
}

button {
    width: 100%;
    padding: 0.5rem;
    background-color: #007bff;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}
</style>