import api from "../axios";

// Admin interface
export interface Admin {
  id: number;
  email: string;
  role: "ADMIN" | "SUPER_ADMIN";
  created_at: string;
  updated_at: string;
}

// Contact interface (from contactApi)
export interface Contact {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  phone_number?: string;
  subject?: string;
  message: string;
  type?:
    | "general inquiry"
    | "volunteering"
    | "donations"
    | "internship"
    | "partnership"
    | "feedback"
    | "compliant"
    | "press/media"
    | "general"
    | "volunteer"
    | "donation";
  created_at: string;
}

// News interface (from newsApi)
export interface News {
  id: number;
  title: string;
  content: string;
  slug?: string;
  excerpt?: string;
  image_url?: string;
  category?: string;
  published_at?: string;
  created_at: string;
  updated_at?: string;
}

// Emergency interface (from emergencyApi)
export interface Emergency {
  id: number;
  title: string;
  location: string;
  description: string;
  status: "ACTIVE" | "INACTIVE" | "RESOLVED";
  is_active?: boolean;
  affected_count?: number;
  raised_amount?: number;
  target_amount?: number;
  goal_amount?: number;
  deadline?: string;
  aid_deployed?: number;
  aid_unit?: string;
  image_url?: string;
  created_at: string;
  updated_at?: string;
}

// Transparency Document interface
export interface TransparencyDoc {
  id: number;
  title: string;
  description?: string;
  file_url: string;
  file_type: string;
  created_at: string;
}

// Beneficiary Stats interface
export interface BeneficiaryStats {
  id: number;
  total_beneficiaries: number;
  countries_count?: number;
  males: number;
  females: number;
  children: number;
  adults: number;
  elderly: number;
  rural: number;
  urban: number;
  regions: {
    region: string;
    count: number;
  }[];
  programs: {
    program_name: string;
    beneficiaries: number;
  }[];
  created_at: string;
  updated_at?: string;
}

// Donation interface
export interface Donation {
  id: number;
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed" | "refunded";
  donor_email: string;
  donor_name?: string;
  tx_ref: string;
  payment_method?: string;
  created_at: string;
  updated_at?: string;
}

// Donation Stats interface
export interface DonationStats {
  id?: number;
  totalAmount: number;
  totalCount: number;
  totalDonors?: number;
  averageDonation: number;
  byStatus: {
    status: string;
    count: number;
    total: number;
  }[];
  recentDonations: Donation[];
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
