import axios from 'axios'

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
      'X-Requested-With': 'XMLHttpRequest'
    }
  })

  return {
    provide: {
      axios: api,
    }
  }
})
