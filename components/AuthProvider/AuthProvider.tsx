'use client';

import { checkSession, getMe } from '@/lib/api/clientApi';

import { useAuthStore } from '@/lib/store/authStore';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );
  const setAuthChecked = useAuthStore((state) => state.setAuthChecked);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const isAuthenticated = await checkSession();

        if (!isAuthenticated) {
          clearIsAuthenticated();
          return;
        }

        const user = await getMe();
        setUser(user);
      } catch {
        clearIsAuthenticated();
      } finally {
        setAuthChecked(true);
      }
    };

    fetchUser();
  }, [setUser, clearIsAuthenticated, setAuthChecked]);

  return children;
};

export default AuthProvider;
