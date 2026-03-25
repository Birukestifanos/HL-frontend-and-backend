import React, { createContext, useContext, useState, useEffect } from 'react';

const ADMIN_SESSION_KEY = 'hibret_admin_authenticated';

interface AdminAuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

// Default credentials - CHANGE THESE in production! Use env vars or backend auth.
const DEFAULT_ADMIN_USER = 'admin';
const DEFAULT_ADMIN_PASS = 'hibret2024';

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(ADMIN_SESSION_KEY);
    setIsAuthenticated(stored === 'true');
  }, []);

  const login = (username: string, password: string): boolean => {
    const user = import.meta.env.VITE_ADMIN_USER ?? DEFAULT_ADMIN_USER;
    const pass = import.meta.env.VITE_ADMIN_PASS ?? DEFAULT_ADMIN_PASS;
    if (username === user && password === pass) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
}
