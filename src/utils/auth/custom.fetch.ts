import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from 'axios';
import {
  setAccessToken,
  unsetAccessToken,
  setCurrentUser,
} from '@/features/common.slice';
import { tokenManager } from '@/utils/auth/token.manager';
import refreshFetch from '@/utils/auth/refresh.fetch';
import { store } from '@/store';

interface RefreshResponse {
  token?: string;
  data?: any;
}

const customFetch: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

customFetch.interceptors.request.use(
  async (config) => {
    const token = tokenManager.getToken();
    if (token) {
      config.headers = config.headers ?? {};
      (
        config.headers as Record<string, string>
      ).Authorization = `Bearer ${token}`;
    }
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

customFetch.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (!originalRequest) return Promise.reject(error);

    if (
      originalRequest.url &&
      originalRequest.url.includes('/auth/refresh-token')
    ) {
      return Promise.reject(error);
    }

    const status = error.response?.status;
    const hadAuthHeader = Boolean(
      originalRequest.headers &&
        (originalRequest.headers as Record<string, unknown>).Authorization
    );

    if (status === 401 && !originalRequest._retry && hadAuthHeader) {
      originalRequest._retry = true;

      try {
        const res = await refreshFetch.post<RefreshResponse>(
          `/auth/refresh-token`
        );
        const newToken = res?.data?.token;
        const user = res?.data?.data;

        if (!newToken) {
          throw new Error('No token returned from refresh endpoint');
        }

        tokenManager.setToken(newToken);
        store.dispatch(setAccessToken(newToken));
        if (user) store.dispatch(setCurrentUser(user));

        originalRequest.headers = originalRequest.headers ?? {};
        (
          originalRequest.headers as Record<string, string>
        ).Authorization = `Bearer ${newToken}`;
        return customFetch(originalRequest);
      } catch (refreshErr) {
        tokenManager.clear();
        store.dispatch(unsetAccessToken());
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
