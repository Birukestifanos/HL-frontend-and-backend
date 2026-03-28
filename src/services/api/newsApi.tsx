import api from "../axios";

interface NewsData {
  title: string;
  content: string;
  slug?: string;
  excerpt?: string;
  image_url?: string;
  category?: string;
  published_at?: string; // ISO date string
}

const newsAPI = {
  // GET /api/v1/news — public
  getAll: async () => {
    const response = await api.get("/v1/news");
    return response.data;
  },

  // GET /api/v1/news/:id — public
  getById: async (id: number) => {
    const response = await api.get(`/v1/news/${id}`);
    return response.data;
  },

  // POST /api/v1/admin/news — protected (ADMIN + SUPER_ADMIN)
  create: async (data: NewsData) => {
    const response = await api.post("/v1/admin/news", data);
    return response.data;
  },

  // PUT /api/v1/admin/news/:id — protected (ADMIN + SUPER_ADMIN)
  update: async (id: number, data: Partial<NewsData>) => {
    const response = await api.put(`/v1/admin/news/${id}`, data);
    return response.data;
  },

  // DELETE /api/v1/admin/news/:id — protected (ADMIN + SUPER_ADMIN)
  delete: async (id: number) => {
    const response = await api.delete(`/v1/admin/news/${id}`);
    return response.data;
  },
};

export default newsAPI;
