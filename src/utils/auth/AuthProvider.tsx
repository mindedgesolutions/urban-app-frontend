import { AdPageLoader } from '@/components';
import { useAuthInit } from '@/hooks/use-auth';
import { createContext, useContext } from 'react';

const AuthContext = createContext({ loading: true });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useAuthInit();

  if (loading) {
    return <AdPageLoader />;
  }

  return (
    <AuthContext.Provider value={{ loading }}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
