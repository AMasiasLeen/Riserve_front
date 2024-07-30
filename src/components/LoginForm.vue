<template>
  
  <center>
    <h1> RESTAURANTE </h1>
  </center>

  <div class="login-form">
    <h2>Inicio de Sesión</h2>
    <form @submit.prevent="submitForm">
      <div class="input-group">
        <label for="username">Usuario:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="input-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn-primary">Iniciar Sesión</button>
    </form>
    <div class="actions">
      <button @click="goToRegister" class="btn-secondary">Registrarse</button>
      <button @click="goBack" class="btn-tertiary">Atrás</button>
    </div>
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

  async function submitForm() {
    const res = await login(username.value, password.value);
    if (res) router.push('/admin');
  }

  function goToRegister() {
    router.push('/register');
  }

  function goBack() {
    router.back();
  }
</script>


<style scoped>
.login-form {
  max-width: 400px;
  margin: 80px auto;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-form h2 {
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

.actions {
  display: flex;
  justify-content: space-between;
}

.btn-secondary, .btn-tertiary {
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-secondary {
  background-color: #00bcd4;
  color: white;
}

.btn-secondary:hover {
  background-color: #0097a7;
}

.btn-tertiary {
  background-color: #f5f5f5;
  color: #333;
}

.btn-tertiary:hover {
  background-color: #e0e0e0;
}
</style>

