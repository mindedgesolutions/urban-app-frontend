import axios, { type AxiosError, type AxiosInstance } from 'axios';
import { tokenManager } from '@/utils/auth/token.manager';
import refreshFetch from '@/utils/auth/refresh.fetch';
import { userManager } from './user.manager';

const customFetch: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

customFetch.interceptors.request.use((config) => {
  const token = tokenManager.getToken();
  if (token) {
    config.headers = config.headers ?? {};
    (config.headers as any).Authorization = `Bearer ${token}`;
  }
  return config;
});

customFetch.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as any;
    if (!originalRequest || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (originalRequest.url.includes(`/auth/refresh-token`)) {
      return Promise.reject(error);
    }
    const status = error.response?.status;

    if (status === 401) {
      originalRequest._retry = true;

      try {
        const res = await refreshFetch.post(`/auth/refresh-token`);
        const newToken = res?.data?.token;
        const user = res?.data?.data;

        if (!newToken) {
          throw new Error('No token returned from refresh endpoint');
        }

        tokenManager.setToken(newToken);
        userManager.setUser(user);

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newToken}`,
        };
        return customFetch(originalRequest);
      } catch (refreshErr) {
        tokenManager.clear();
        userManager.clear();
        window.dispatchEvent(new Event('unauthenticated'));
        return Promise.reject(refreshErr);
      }
    }
    if (status === 403) {
      window.dispatchEvent(new Event('unauthorized'));
    }

    return Promise.reject(error);
  }
);

export default customFetch;
