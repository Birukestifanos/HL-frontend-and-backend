import api from "../axios";

interface EmergencyPayload {
  title: string;
  location: string;
  description: string;
  status?: "ACTIVE" | "INACTIVE" | "RESOLVED";
  affected_count?: number;
  raised_amount?: number;
  goal_amount?: number;
  aid_deployed?: number;
  aid_unit?: string;
  image_url?: string;
}

interface EmergencyUpdatePayload extends Partial<EmergencyPayload> {
  increment_amount?: number;
}

const emergencyAPI = {
  // GET /api/v1/emergencies — all emergencies + aggregate stats
  getAll: async () => {
    const response = await api.get("/v1/emergencies");
    return response.data;
  },

  // GET /api/v1/emergencies/active — active emergencies only (max 5)
  getActive: async () => {
    const response = await api.get("/v1/emergencies/active");
    return response.data;
  },

  // GET /api/v1/emergencies/:id — single emergency by ID
  getById: async (id: number) => {
    const response = await api.get(`/v1/emergencies/${id}`);
    return response.data;
  },

  // POST /api/v1/admin/emergencies — create emergency (ADMIN + SUPER_ADMIN)
  create: async (data: EmergencyPayload) => {
    const response = await api.post("/v1/admin/emergencies", data);
    return response.data;
  },

  // PUT /api/v1/admin/emergencies/:id — update emergency (ADMIN + SUPER_ADMIN)
  update: async (id: number, data: EmergencyUpdatePayload) => {
    const response = await api.put(`/v1/admin/emergencies/${id}`, data);
    return response.data;
  },

  // DELETE /api/v1/admin/emergencies/:id — delete emergency (ADMIN + SUPER_ADMIN)
  delete: async (id: number) => {
    const response = await api.delete(`/v1/admin/emergencies/${id}`);
    return response.data;
  },
};

export default emergencyAPI;
