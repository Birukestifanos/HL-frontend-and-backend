import api from "../axios";

const authAPI = {
  // POST /api/v1/admin/login — public, rate limited (3 attempts / 10 min)
  login: async (email: string, password: string) => {
    console.log("authAPI.login called with:", email);
    console.log("Sending request to /api/v1/admin/login");
    const response = await api.post("/v1/admin/login", { email, password });
    console.log("authAPI.login response:", response);
    console.log("authAPI.login response.data:", response.data);
    return response.data;
  },

  // PUT /api/v1/admin/password/me — protected (ADMIN + SUPER_ADMIN)
  updatePassword: async (currentPassword: string, newPassword: string) => {
    const response = await api.put("/v1/admin/password/me", {
      currentPassword,
      newPassword,
    });
    return response.data;
  },
};

export const { login, updatePassword } = authAPI;
export default authAPI;
