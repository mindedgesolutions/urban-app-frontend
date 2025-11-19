import refreshFetch from '@/utils/auth/refresh.fetch';
import { tokenManager } from '@/utils/auth/token.manager';
import { userManager } from '@/utils/auth/user.manager';
import { useEffect, useState } from 'react';

export const useAuthInit = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const res = await refreshFetch.post(`/auth/refresh-token`);

        tokenManager.setToken(res.data.token);
        userManager.setUser(res.data.data);
      } catch {
        tokenManager.clear();
        userManager.clear();
      }
      setLoading(false);
    }
    init();
  }, []);
  return { loading };
};
