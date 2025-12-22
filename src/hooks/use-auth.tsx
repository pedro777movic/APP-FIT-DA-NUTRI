'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORIES, type Category } from '@/lib/data';

const AUTH_STORAGE_KEY = 'nutri-app-auth';

interface AuthContextType {
  unlockedCategories: Set<string>;
  login: (slug: string, email: string, pass: string) => boolean;
  isUnlocked: (slug: string) => boolean;
  isReady: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [unlockedCategories, setUnlockedCategories] = useState<Set<string>>(
    new Set()
  );
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
      if (storedAuth) {
        setUnlockedCategories(new Set(JSON.parse(storedAuth)));
      }
    } catch (error) {
      console.error('Falha ao carregar estado de autenticação do localStorage', error);
    } finally {
      setIsReady(true);
    }
  }, []);

  const persistUnlocked = useCallback((newSet: Set<string>) => {
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(Array.from(newSet)));
      setUnlockedCategories(newSet);
    } catch (error) {
      console.error('Falha ao salvar estado de autenticação no localStorage', error);
    }
  }, []);

  const login = useCallback(
    (slug: string, email: string, pass: string): boolean => {
      const category = CATEGORIES.find((c) => c.slug === slug);
      if (category && category.email === email && category.senha === pass) {
        const newUnlocked = new Set(unlockedCategories);
        newUnlocked.add(slug);
        persistUnlocked(newUnlocked);
        return true;
      }
      return false;
    },
    [unlockedCategories, persistUnlocked]
  );

  const isUnlocked = useCallback(
    (slug: string) => unlockedCategories.has(slug),
    [unlockedCategories]
  );

  const value = useMemo(
    () => ({
      unlockedCategories,
      login,
      isUnlocked,
      isReady,
    }),
    [unlockedCategories, login, isUnlocked, isReady]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
