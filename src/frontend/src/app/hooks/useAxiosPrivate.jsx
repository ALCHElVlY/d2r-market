// Built-in imports
import { useEffect } from 'react';

// Internal imports
import { axiosPrivate } from '../axiosPrivate.js';
import {
    useAuth,
} from './index';

const useAxiosPrivate = () => {
    const { auth } = useAuth();

    useEffect(() => {
        const requestInterceptor = axiosPrivate.interceptors.request.use(
            (config) => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.user.token}`;
                }
                return config;
            },
            (error) => Promise.reject(error),
        );

        const reponseInterceptor = axiosPrivate.interceptors.response.use(
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
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor);
            axiosPrivate.interceptors.response.eject(reponseInterceptor);
        }
    }, [auth]);

    return axiosPrivate;
}

export default useAxiosPrivate;