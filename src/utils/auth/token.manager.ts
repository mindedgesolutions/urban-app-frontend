let accessToken: string | null = null;

export const tokenManager = {
  getToken(): string | null {
    return accessToken;
  },
  setToken(token: string | null) {
    accessToken = token;
  },
  clear() {
    accessToken = null;
  },
};
