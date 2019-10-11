import { $axios } from '../../boot/axios'

const login = async ({ commit }, obj) => {
  let res = await $axios.post('v1/person/auth', obj)
  window.localStorage.setItem('FTOKEN', res.data)
  return res.data
}

export default {
  login
}
