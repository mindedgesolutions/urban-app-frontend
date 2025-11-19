import axios, { type AxiosInstance } from 'axios';

const refreshFetch: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default refreshFetch;
