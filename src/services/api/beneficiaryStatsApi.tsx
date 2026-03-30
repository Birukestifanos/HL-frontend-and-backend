import api from "../axios";

interface BeneficiaryStats {
  id: number;
  total_beneficiaries: number;
  countries_count: number;
  water_projects: number;
  updated_at: string;
}

interface UpdatePayload {
  total_beneficiaries?: number;
  countries_count?: number;
  water_projects?: number;
}

const beneficiaryStatsAPI = {
  // GET /api/v1/beneficiary-stats — public
  // Auto-creates a record with zeros if none exists
  getStats: async () => {
    const response = await api.get("/v1/beneficiary-stats");
    return response.data;
  },

  // PUT /api/v1/admin/beneficiary-stats — protected (ADMIN + SUPER_ADMIN)
  updateStats: async (data: UpdatePayload) => {
    const response = await api.put("/v1/admin/beneficiary-stats", data);
    return response.data;
  },
};

export const { getStats, updateStats } = beneficiaryStatsAPI;
export default beneficiaryStatsAPI;
