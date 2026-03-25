import { useAdminAuth } from "../context/AdminAuthContext";
import { AdminLoginPage } from "../pages/AdminLoginPage";
import { AdminPage } from "../pages/AdminPage";

export function AdminGate() {
  const { isAuthenticated } = useAdminAuth();
  return isAuthenticated ? <AdminPage /> : <AdminLoginPage />;
}
