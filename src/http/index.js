import axios from 'axios';
import { defState, setToken } from '../state-management/store/auth-reducer.js';

export const API_URL = `http://localhost:5000/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
            
            
            setToken(response.data.accessToken);
            
            
            return $api.request(originalRequest);
        } catch (e) {
            console.log('Not authorized')
        }
    }
    throw error;
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${defState}`
    return config;
})


export default $api;