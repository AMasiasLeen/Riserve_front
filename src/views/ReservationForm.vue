<template>
    <div class="reservation-container">
      <div class="form-section">
        <h2>Reservación</h2>
        <form>
          <label for="cedula">Cédula de quien reserva</label>
          <input type="text" id="cedula" v-model="formData.cedula" />
  
          <label for="fecha-reservacion">Fecha de reservación</label>
          <input type="date" id="fecha-reservacion" v-model="formData.fechaReservacion" />
  
          <label for="fecha-creacion">Fecha en la que se crea la reservación</label>
          <input type="date" id="fecha-creacion" v-model="formData.fechaCreacion" />
  
          <label for="mesa-lugar">Mesa o lugar a reservar</label>
          <input type="text" id="mesa-lugar" v-model="formData.mesaLugar" />
  
          <label for="valor">Valor de reservación</label>
          <input type="text" id="valor" v-model="formData.valor" />
  
          <label for="transaccion">Datos de transacción</label>
          <input type="text" id="transaccion" v-model="formData.transaccion" />
  
          <h3>Detalle reservación</h3>
          
          <label for="producto-reservacion">Producto/reservación</label>
          <input type="text" id="producto-reservacion" v-model="formData.productoReservacion" />
  
          <label for="id-reservacion">ID reservación</label>
          <input type="text" id="id-reservacion" v-model="formData.idReservacion" />
  
          <label for="id-producto">ID producto</label>
          <input type="text" id="id-producto" v-model="formData.idProducto" />
  
          <button type="submit">Enviar</button>
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
  import { useRoute } from 'vue-router';
  
  const formData = ref({
    cedula: '',
    fechaReservacion: '',
    fechaCreacion: '',
    mesaLugar: '',
    valor: '',
    transaccion: '',
    productoReservacion: '',
    idReservacion: '',
    idProducto: ''
  });
  
  const business = ref({});
  const route = useRoute();
  
  onMounted(() => {
    const businessId = route.params.businessId;
    business.value = {
      name: 'SUBWAY',
      description: 'LOS MEJORES SANGUCHITOS DE LATINOAMERICA',
      valor: '10.00',
      disponibilidad: 'Alta'
    };
  });
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
  