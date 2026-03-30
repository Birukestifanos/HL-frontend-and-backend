import api from "../axios";

interface ContactFormData {
  name: string;
  email?: string;
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
    | "press/media";
}

interface Contact extends ContactFormData {
  id: number;
  created_at: string;
}

interface PaginatedContacts {
  status: string;
  data: {
    contacts: Contact[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
}

const contactAPI = {
  // POST /api/v1/contacts — public, no auth required
  // At least one of email or phone_number must be provided
  submitContact: async (data: ContactFormData) => {
    const response = await api.post("/v1/contacts", data);
    return response.data;
  },

  // GET /api/v1/admin/contacts — ADMIN + SUPER_ADMIN
  getAllContacts: async (page = 1, limit = 20) => {
    const response = await api.get<PaginatedContacts>("/v1/admin/contacts", {
      params: { page, limit },
    });
    return response.data;
  },

  // GET /api/v1/admin/contacts/:id — ADMIN + SUPER_ADMIN
  getContact: async (id: number) => {
    const response = await api.get(`/v1/admin/contacts/${id}`);
    return response.data;
  },

  // DELETE /api/v1/admin/contacts/:id — ADMIN + SUPER_ADMIN
  deleteContact: async (id: number) => {
    const response = await api.delete(`/v1/admin/contacts/${id}`);
    return response.data;
  },
};

export const { submitContact, getAllContacts, getContact, deleteContact } =
  contactAPI;
export default contactAPI;
