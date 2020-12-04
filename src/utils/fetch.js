import axios from 'axios'

const fetch = axios.create({
  baseURL: '/api/wm',
  timeout: 60000 // request timeout
})

export default fetch
