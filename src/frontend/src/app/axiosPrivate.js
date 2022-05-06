// External imports
import axios from 'axios';
import { toast } from 'react-toastify';


// Default Axios instance
export default axios.create({
    baseURL: process.env.BASE_URL,
});

// Private Axios instance
export const axiosPrivate = axios.create({
    baseURL: process.env.BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});

// Interceptors
axiosPrivate.interceptors.request.use(
    (config) => {
        if (config.user) {
            config.headers.Authorization = `Bearer ${config.user?.token}`;
        } 
        else if (!config.user && config.data) {
            config.headers.Authorization = `Bearer ${config.data.user?.token}`;
        } 
        else if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${config.user?.token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error)
    },
);
axiosPrivate.interceptors.response.use(
    response => response,
    async (error) => {
        const { message } = error.response.data;

        if (error?.response?.status === 401 &&
            message === 'Token expired') {
                toast.error('Your session has expired. Please login again.');
            }
        return Promise.reject(error);
    }
);