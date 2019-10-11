import Vue from 'vue'
import axios from 'axios'

axios.interceptors.request.use((config) => {
  let token = window.localStorage.getItem('FTOKEN')

  if (token != null) config.headers.Authorization = `Bearer ${token}`
}, (err) => {
  return Promise.reject(err)
})

Vue.prototype.$axios = axios.create({
  baseURL: 'http://192.168.55.17:90/api/'
})

export const $axios = axios.create({
  baseURL: 'http://192.168.55.17:90/api/'
})
