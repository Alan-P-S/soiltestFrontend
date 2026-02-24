import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:'https://soiltestbackend.onrender.com/api',
    withCredentials:true
})