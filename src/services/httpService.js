import axios from 'axios';
import logService from './logService';
import { toast } from 'react-toastify';
import * as Sentry from '@sentry/react';

axios.interceptors.response.use(null, (error) => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
		logService.log(error);
        toast.error('An unexpected error occurred.');
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
};