import { create } from 'zustand';
import { User } from '../api/clientApi';

type AuthStore = {
  isAuthenticated: boolean;
  isAuthChecked: boolean;
  user: User | null;
  setUser: (user: User) => void;
  clearIsAuthenticated: () => void;
  setAuthChecked: (value: boolean) => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  isAuthenticated: false,
  isAuthChecked: false,
  user: null,
  setUser: (user: User) => {
    set(() => ({ user, isAuthenticated: true }));
  },
  clearIsAuthenticated: () => {
    set(() => ({ user: null, isAuthenticated: false }));
  },
  setAuthChecked: (value) =>
    set({
      isAuthChecked: value,
    }),
}));
