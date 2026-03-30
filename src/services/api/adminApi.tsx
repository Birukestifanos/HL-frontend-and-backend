import api from "../axios";

// Admin interface
export interface Admin {
  id: number;
  email: string;
  role: "ADMIN" | "SUPER_ADMIN";
  created_at: string;
  updated_at: string;
}

const adminAPI = {
  // GET /api/v1/admin — protected (ADMIN + SUPER_ADMIN)
  getAdmins: async () => {
    const response = await api.get("/v1/admin");
    return response.data; // { status, result, data: { admins } }
  },

  // POST /api/v1/admin — protected (SUPER_ADMIN only)
  createAdmin: async (
    email: string,
    password: string,
    role?: "ADMIN" | "SUPER_ADMIN",
  ) => {
    const response = await api.post("/v1/admin", { email, password, role });
    return response.data;
  },

  // PUT /api/v1/admin/:id — protected (SUPER_ADMIN only)
  updateAdmin: async (
    id: number,
    data: { email?: string; role: "ADMIN" | "SUPER_ADMIN" },
  ) => {
    const response = await api.put(`/v1/admin/${id}`, data);
    return response.data;
  },

  // DELETE /api/v1/admin/:id — protected (SUPER_ADMIN only)
  deleteAdmin: async (id: number) => {
    const response = await api.delete(`/v1/admin/${id}`);
    return response.data;
  },
};

export const { getAdmins, createAdmin, updateAdmin, deleteAdmin } = adminAPI;
export default adminAPI;
