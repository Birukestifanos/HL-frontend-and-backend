import React, { createContext, useContext, useState, useEffect } from "react";
import authAPI from "../services/api/authApi";
// import toast from "react-hot-toast";

const TOKEN_KEY = "hibret_admin_token";
const ADMIN_KEY = "hibret_admin_data";

interface Admin {
  id: number;
  email: string;
  role: string;
}

interface AdminAuthContextType {
  isAuthenticated: boolean;
  admin: Admin | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined,
);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session on mount
  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    const storedAdmin = localStorage.getItem(ADMIN_KEY);

    if (storedToken && storedAdmin) {
      setToken(storedToken);
      setAdmin(JSON.parse(storedAdmin));
    }

    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setLoading(true);

      const response = await authAPI.login(email, password);

      const { token: jwt, data } = response;

      // Save to localStorage
      localStorage.setItem(TOKEN_KEY, jwt);
      localStorage.setItem(ADMIN_KEY, JSON.stringify(data.admin));

      // Update state
      setToken(jwt);
      setAdmin(data.admin);
    } catch (error: any) {
      console.error("Login failed:", error);

      // Optional: show message
      // toast.error(error.response?.data?.message || "Login failed");

      throw error; // important if you want UI to react
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ADMIN_KEY);
    setToken(null);
    setAdmin(null);
    // toast.success("Logged out successfully.");
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated: !!token,
        admin,
        token,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx)
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}
