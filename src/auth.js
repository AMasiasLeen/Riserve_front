// src/auth.js
import { ref } from 'vue'
import axios from 'axios'

const isAuthenticated = ref(false)
const user = ref({ name: '' })

async function login(username, password) {
  isAuthenticated.value = true
  user.value.name = username

  const options = {
    method: 'POST',
    url: 'http://localhost:3000/api/v1/login',
    headers: { 'Content-Type': 'application/json' },
    data: { Mail: username, Password: password }
  }

  const res = await axios.request(options)
  console.log(res)
  if (res.status == 200) {
    sessionStorage.setItem('token', res.data.token)
    return true
  }
  return false
}

function logout() {
  isAuthenticated.value = false
  user.value.name = ''
}

export function useAuth() {
  return {
    isAuthenticated,
    user,
    login,
    logout
  }
}
