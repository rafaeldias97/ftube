import axios from '../../boot/axios'

const searchVideo = async ({ commit }, obj) => {
  let res = await axios.$axios.get(`v1/youtube/${obj}`)
  commit('SET_VIDEOS', res.data)
  return res.data
}

export default {
  searchVideo
}
