<template>
    <div class="register-container">
      <h2>Registro de Usuario</h2>
      <form @submit.prevent="registerUser">
        <div class="input-group">
          <label for="cedula">Cédula</label>
          <input type="text" id="cedula" v-model="formData.user_ced" required />
        </div>
        <div class="input-group">
          <label for="name">Nombre</label>
          <input type="text" id="name" v-model="formData.user_name" required />
        </div>
        <div class="input-group">
          <label for="lastname">Apellido</label>
          <input type="text" id="lastname" v-model="formData.lastname" required />
        </div>
        <div class="input-group">
          <label for="phone">Teléfono</label>
          <input type="text" id="phone" v-model="formData.phone" required />
        </div>
        <div class="input-group">
          <label for="email">Correo</label>
          <input type="email" id="email" v-model="formData.user_mail" required />
        </div>
        <div class="input-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="formData.password" required />
        </div>
        <button type="submit" class="btn-primary">Registrar</button>
        <button type="button" @click="goBack" class="btn-tertiary">Volver</button>
      </form>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const formData = ref({
    user_ced: '',
    user_name: '',
    lastname: '',
    phone: '',
    user_mail: '',
    password: ''
});

const router = useRouter();

async function registerUser() {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/users', formData.value);
        if (response.status === 201) {
            router.push('/login');
        }
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
    }
}

function goBack() {
    router.go(-1);
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.register-container h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.btn-primary {
  width: 100%;
  padding: 0.75rem;
  background-color: #e91e63;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #d81b60;
}

.btn-tertiary {
  width: 100%;
  padding: 0.75rem;
  background-color: #f5f5f5;
  border: none;
  color: #333;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn-tertiary:hover {
  background-color: #e0e0e0;
}
</style>
