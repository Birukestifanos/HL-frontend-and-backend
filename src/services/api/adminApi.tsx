import api from "../axios";

// Types
export interface Admin {
  id: string;
  email: string;
  role: "ADMIN" | "SUPER_ADMIN";
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: "general" | "volunteer" | "internship" | "partnership";
  created_at: string;
}

export interface News {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Emergency {
  id: string;
  title: string;
  description: string;
  target_amount?: number;
  current_amount?: number;
  deadline?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface TransparencyDoc {
  id: string;
  title: string;
  file_url: string;
  file_type: "annual_report" | "audit_report";
  created_at: string;
}

export interface BeneficiaryStats {
  total_beneficiaries: number;
  countries_count: number;
}

export interface Donation {
  id: string;
  donor_name: string;
  donor_email: string;
  amount: number;
  currency: string;
  status: string;
  tx_ref: string;
  created_at: string;
}

export interface DonationStats {
  totalAmount: number;
  totalDonors: number;
  averageDonation: number;
}

// Admin API
const adminAPI = {
  // Admin Management (Super Admin only)
  getAdmins: async (): Promise<Admin[]> => {
    const response = await api.get("/v1/admin");
    return response.data.data;
  },

  createAdmin: async (data: {
    email: string;
    password: string;
    role: string;
  }): Promise<Admin> => {
    const response = await api.post("/v1/admin", data);
    return response.data.data;
  },

  updateAdmin: async (
    id: string,
    data: { email?: string; role?: string },
  ): Promise<Admin> => {
    const response = await api.put(`/v1/admin/${id}`, data);
    return response.data.data;
  },

  deleteAdmin: async (id: string): Promise<void> => {
    await api.delete(`/v1/admin/${id}`);
  },

  // Password update
  updatePassword: async (
    currentPassword: string,
    newPassword: string,
  ): Promise<void> => {
    await api.put("/v1/admin/password/me", { currentPassword, newPassword });
  },

  // Contacts
  getContacts: async (): Promise<Contact[]> => {
    const response = await api.get("/v1/admin/contacts");
    return response.data.data;
  },

  getContact: async (id: string): Promise<Contact> => {
    const response = await api.get(`/v1/admin/contacts/${id}`);
    return response.data.data;
  },

  deleteContact: async (id: string): Promise<void> => {
    await api.delete(`/v1/admin/contacts/${id}`);
  },

  // News
  getNews: async (): Promise<News[]> => {
    const response = await api.get("/v1/admin/news");
    return response.data.data;
  },

  createNews: async (data: {
    title: string;
    content: string;
    image_url?: string;
  }): Promise<News> => {
    const response = await api.post("/v1/admin/news", data);
    return response.data.data;
  },

  updateNews: async (
    id: string,
    data: { title?: string; content?: string; image_url?: string },
  ): Promise<News> => {
    const response = await api.put(`/v1/admin/news/${id}`, data);
    return response.data.data;
  },

  deleteNews: async (id: string): Promise<void> => {
    await api.delete(`/v1/admin/news/${id}`);
  },

  // Emergencies
  getEmergencies: async (): Promise<Emergency[]> => {
    const response = await api.get("/v1/admin/emergencies");
    return response.data.data;
  },

  createEmergency: async (data: {
    title: string;
    description: string;
    target_amount?: number;
    deadline?: string;
  }): Promise<Emergency> => {
    const response = await api.post("/v1/admin/emergencies", data);
    return response.data.data;
  },

  updateEmergency: async (
    id: string,
    data: {
      title?: string;
      description?: string;
      target_amount?: number;
      deadline?: string;
      is_active?: boolean;
    },
  ): Promise<Emergency> => {
    const response = await api.put(`/v1/admin/emergencies/${id}`, data);
    return response.data.data;
  },

  deleteEmergency: async (id: string): Promise<void> => {
    await api.delete(`/v1/admin/emergencies/${id}`);
  },

  // Beneficiary Stats
  getBeneficiaryStats: async (): Promise<BeneficiaryStats> => {
    const response = await api.get("/v1/admin/beneficiary-stats");
    return response.data.data;
  },

  updateBeneficiaryStats: async (data: {
    total_beneficiaries?: number;
    countries_count?: number;
  }): Promise<BeneficiaryStats> => {
    const response = await api.put("/v1/admin/beneficiary-stats", data);
    return response.data.data;
  },

  // Transparency
  getTransparencyDocs: async (): Promise<TransparencyDoc[]> => {
    const response = await api.get("/v1/admin/transparency");
    return response.data.data;
  },

  uploadTransparencyDoc: async (
    file: File,
    title: string,
    file_type: "annual_report" | "audit_report",
  ): Promise<TransparencyDoc> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("file_type", file_type);
    const response = await api.post("/v1/admin/transparency", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.data;
  },

  updateTransparencyDoc: async (
    id: string,
    data: { title?: string },
  ): Promise<TransparencyDoc> => {
    const response = await api.put(`/v1/admin/transparency/${id}`, data);
    return response.data.data;
  },

  deleteTransparencyDoc: async (id: string): Promise<void> => {
    await api.delete(`/v1/admin/transparency/${id}`);
  },

  // Donations
  getDonations: async (): Promise<Donation[]> => {
    const response = await api.get("/v1/admin/donations");
    return response.data.data;
  },

  getDonationStats: async (): Promise<DonationStats> => {
    const response = await api.get("/v1/admin/donations/stats");
    return response.data.data;
  },
};

export default adminAPI;
