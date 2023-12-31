import axios from 'axios'

export default () => {
  return axios.create({
    // baseURL: `http://localhost:3000/`,
    baseURL: window.location.protocol + '//' + window.location.host,
    withCredentials: true
  })
}