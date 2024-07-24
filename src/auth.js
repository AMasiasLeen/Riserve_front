// src/auth.js
import { ref } from 'vue';

const isAuthenticated = ref(false);
const user = ref({ name: '' });

function login(username) {
  isAuthenticated.value = true;
  user.value.name = username;
}

function logout() {
  isAuthenticated.value = false;
  user.value.name = '';
}

export function useAuth() {
  return {
    isAuthenticated,
    user,
    login,
    logout
  };
}
