import api from "../axios";

interface AuditLogFilters {
  page?: number;
  limit?: number;
  action?: "LOGIN" | "CREATE" | "UPDATE" | "DELETE";
  entity?:
    | "AUTH"
    | "ADMIN"
    | "NEWS"
    | "EMERGENCY"
    | "CONTACT"
    | "TRANSPARENCY"
    | "BENEFICIARY_STATS";
  adminId?: number;
}

const auditLogAPI = {
  // GET /api/v1/admin/audit-logs — SUPER_ADMIN only
  getAll: async (filters: AuditLogFilters = {}) => {
    const response = await api.get("/v1/admin/audit-logs", {
      params: filters,
    });
    return response.data;
  },
};

export default auditLogAPI;
