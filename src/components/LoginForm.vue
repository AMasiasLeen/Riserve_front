<!-- src/components/LoginForm.vue -->
<template>
    <div class="login-form">
      <h2>Inicio de Sesión</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="username">Usuario:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuth } from '../auth';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  const { login } = useAuth();
  
  function submitForm() {
    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo, podrías llamar a una API para validar las credenciales
    if (username.value === 'admin' && password.value === 'admin') {
      alert('Inicio de sesión exitoso');
      login(username.value);
      router.push('/');
    } else {
      alert('Credenciales incorrectas');
    }
  }
  </script>
  
  <style scoped>
  .login-form {
    max-width: 300px;
    margin: 50px auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .login-form h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .login-form div {
    margin-bottom: 1rem;
  }
  
  .login-form label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .login-form input {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
  }
  
  .login-form button {
    width: 100%;
    padding: 0.5rem;
    background-color: #007bff;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .login-form button:hover {
    background-color: #0056b3;
  }
  </style>
  