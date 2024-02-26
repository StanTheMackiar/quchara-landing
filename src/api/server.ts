import { SERVER_URL_PROD, WAIT_TIME } from '@/helpers/env';
import axios from 'axios';

export const qucharaServer = axios.create({
    baseURL: SERVER_URL_PROD,
    timeout: Number(WAIT_TIME),
    timeoutErrorMessage: 'Tiempo de espera agotado',
});

qucharaServer.interceptors.request.use(
    async request => {
        const { Authorization } = request.headers;
        if (Authorization) return request;
        return request;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);

export default qucharaServer;
