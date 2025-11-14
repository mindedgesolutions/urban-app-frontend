import axios, { type AxiosInstance } from 'axios';

const refreshFetch: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

refreshFetch.interceptors.request.use(
  async (config) => {
    config.headers = config.headers ?? {};
    try {
      const rawUrl = (config.url ?? '') as string;
      if (!rawUrl) return config;
    } catch (err) {
      console.error({ url: config.url, err });
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default refreshFetch;
