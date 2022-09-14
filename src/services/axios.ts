import axios from 'axios'


const BACK_END_URL = process.env.BACK_END_URL


const api = axios.create({
    baseURL: `${BACK_END_URL}/api`
})



export default api