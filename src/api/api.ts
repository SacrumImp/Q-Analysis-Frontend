import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://194.87.109.22:11111',
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
