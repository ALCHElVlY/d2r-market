// External imports
import axios from 'axios';


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
        console.log(config);
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

/* axiosPrivate.interceptors.response.use(
    response => response,
    async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
            prevRequest.sent = true;
            const newAccessToken = 'Some token'
            prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
    }
);*/