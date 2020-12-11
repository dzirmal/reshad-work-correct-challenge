import axios from 'axios'

const baseURL = 'https://swapi.dev/api/'

const axiosInstance = axios.create({
  baseURL: baseURL,
})

export default axiosInstance
