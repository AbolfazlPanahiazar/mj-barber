import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useStorage } from './useStorage';
const { NEXT_PUBLIC_STORAGE_KEY } = process.env;

interface IAuthenticatedUser {
  token: string;
}

export const useAuth = () => {
  const { reload } = useRouter();
  const storageKey = NEXT_PUBLIC_STORAGE_KEY;
  const { getItem, setItem, removeItem } = useStorage('localStorage');

  const getAuthenticatedUser = (): IAuthenticatedUser | null => {
    const user = getItem(storageKey);
    if (user) {
      const userTokens: IAuthenticatedUser = JSON.parse(user);
      return userTokens;
    }
    return null;
  };

  const [authenticatedUser, setAuthenticatedUser] = useState<IAuthenticatedUser | null>(getAuthenticatedUser());

  useEffect(() => {
    setAuthenticatedUser(getAuthenticatedUser());
  }, []);

  const saveAuthenticatedUser = (user: IAuthenticatedUser) => {
    setItem(storageKey, JSON.stringify(user));
    setAuthenticatedUser(user);
  };

  const logout = () => {
    setAuthenticatedUser(null);
    removeItem(storageKey);
    reload();
  };

  return {
    saveAuthenticatedUser,
    authenticatedUser,
    isAuthenticated: !!authenticatedUser,
    logout,
  };
};
