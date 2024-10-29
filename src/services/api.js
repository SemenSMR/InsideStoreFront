import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // URL твоего бэкенда

const api = axios.create({
    baseURL: API_URL,
});

// Добавление JWT токена в заголовки
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default api;