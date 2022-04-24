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
        // console.log(error.response);
        const TokenExpired = error.response.data.message
        // const prevRequest = error?.config;

        if (error?.response?.status === 401 &&
            TokenExpired === 'Token expired') {
                // const user = JSON.parse(error.config.data);
                toast.error('Your session has expired. Please login again.');

                // Remove the local storage token
                localStorage.removeItem('persist:root');
            }
        /* if (error?.response?.status === 403 && !prevRequest?.sent) {
            prevRequest.sent = true;
            prevRequest.headers.Authorization = `Bearer ${undefined}`;
            return axiosPrivate(prevRequest);
        }*/
        return Promise.reject(error);
    }
);