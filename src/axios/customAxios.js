import axios from 'axios'
const authFetch = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    Accepts: 'application/json',
  },
})
export default authFetch
