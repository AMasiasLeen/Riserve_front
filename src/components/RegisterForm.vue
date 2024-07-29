<template>
    <div class="register-container">
        <h2>Registro de Usuario</h2>
        <form @submit.prevent="registerUser">
            <label for="cedula">Cédula</label>
            <input type="text" id="cedula" v-model="formData.cedula" required />

            <label for="name">Nombre</label>
            <input type="text" id="name" v-model="formData.name" required />

            <label for="lastname">Apellido</label>
            <input type="text" id="lastname" v-model="formData.lastname" required />

            <label for="phone">Teléfono</label>
            <input type="text" id="phone" v-model="formData.phone" required />

            <label for="email">Correo</label>
            <input type="email" id="email" v-model="formData.email" required />

            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="formData.password" required />

            <button type="submit">Registrar</button>
            <button type="button" @click="goBack">Volver</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const formData = ref({
    cedula: '',
    name: '',
    lastname: '',
    phone: '',
    email: '',
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
    margin: 50px auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.register-container h2 {
    text-align: center;
    margin-bottom: 1rem;
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