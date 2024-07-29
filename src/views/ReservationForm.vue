<template>
  <div class="reservation-container">
    <div class="form-section">
      <h2>Reservación</h2>
      <form @submit.prevent="submitReservation">
        <label for="user_ced">Cédula de quien reserva</label>
        <input type="text" id="user_ced" v-model="formData.user_ced" required />

        <label for="user_name">Nombre</label>
        <input type="text" id="user_name" v-model="formData.user_name" required />

        <label for="user_lastname">Apellido</label>
        <input type="text" id="user_lastname" v-model="formData.user_lastname" required />

        <label for="user_phone">Teléfono</label>
        <input type="text" id="user_phone" v-model="formData.user_phone" required />

        <label for="user_mail">Correo</label>
        <input type="email" id="user_mail" v-model="formData.user_mail" required />

        <label for="reservation_date">Fecha de reservación</label>
        <input type="date" id="reservation_date" v-model="formData.reservation_date" required />

        <label for="creation_date">Fecha de creación</label>
        <input type="date" id="creation_date" v-model="formData.creation_date" required />

        <label for="table_number">Número de mesa</label>
        <input type="text" id="table_number" v-model="formData.table_number" required />

        <label for="reservation_value">Valor de la reservación</label>
        <input type="text" id="reservation_value" v-model="formData.reservation_value" required />

        <label for="transaction_data">Datos de transacción</label>
        <input type="text" id="transaction_data" v-model="formData.transaction_data" required />

        <label for="product_details">Detalles del producto</label>
        <input type="text" id="product_details" v-model="formData.product_details" required />

        <button type="submit">Enviar</button>
        <button type="button" @click="goBack">Volver</button>
      </form>
    </div>
    <div class="business-details">
      <h2>Lugar de reserva</h2>
      <p><strong>Nombre:</strong> {{ business.name }}</p>
      <p><strong>Descripción:</strong> {{ business.description }}</p>
      <p><strong>Valor:</strong> {{ business.valor }}</p>
      <p><strong>Disponibilidad:</strong> {{ business.disponibilidad }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const formData = ref({
  user_ced: '',
  user_name: '',
  user_lastname: '',
  user_phone: '',
  user_mail: '',
  reservation_date: '',
  creation_date: '',
  table_number: '',
  reservation_value: '',
  transaction_data: '',
  product_details: ''
});

const business = ref({});
const route = useRoute();
const router = useRouter();

onMounted(() => {
  const businessId = route.params.businessId;
  business.value = {
    name: 'SUBWAY',
    description: 'LOS MEJORES SANGUCHITOS DE LATINOAMERICA',
    valor: '10.00',
    disponibilidad: 'Alta'
  };
});

async function submitReservation() {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/reservations', formData.value);
    if (response.status === 201) {
      router.push({ name: 'reservation-detail', params: { reservationId: response.data.id } });
    }
  } catch (error) {
    console.error('Error al realizar la reservación:', error);
  }
}

function goBack() {
  router.go(-1);
}
</script>

<style scoped>
.reservation-container {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

.form-section {
  width: 45%;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.business-details {
  width: 45%;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 1rem;
}

input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
