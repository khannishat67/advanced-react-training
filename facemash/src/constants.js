import axios from 'axios';
import { useCurrentUser } from './hooks/custom-hooks';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080'
})


axiosClient.interceptors.request.use(function (config) {
    const user = useCurrentUser();
    if (user) {
        config = {
            ...config,
            headers: {
                "Authorization": `Bearer ${user.id}`
            }
        }

    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
export {axiosClient};