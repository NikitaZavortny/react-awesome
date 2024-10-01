import axios from 'axios';

export const API_URL = `https://localhost:5000/api`;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
            if (responce.data.result == 200) {
                localStorage.setItem('token', response.data.accessToken);
                return $api.request(originalRequest);
            }
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН');
            return "Not authorized";
        }
    }
    throw error;
})

export default $api;