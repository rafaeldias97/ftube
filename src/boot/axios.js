import Vue from 'vue'
import axios from 'axios'

const $axios = axios.create({
  baseURL: 'http://192.168.55.17:90/api/'
})

$axios.interceptors.request.use((config) => {
  let token = window.localStorage.getItem('FTOKEN')
  if (token !== null) config.headers.Authorization = `Bearer ${token}`
  return config
}, (error) => {
  return Promise.reject(error)
})

Vue.prototype.$axios = $axios

export default {
  $axios
}
