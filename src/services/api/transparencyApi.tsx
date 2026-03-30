import api from "../axios";

interface TransparencyUploadPayload {
  title: string;
  file_type: "annual_report" | "audit";
  year: number;
  file: File; // PDF file
}

interface TransparencyUpdatePayload {
  title?: string;
  file_type?: "annual_report" | "audit";
  year?: number;
  file?: File;
}

const transparencyAPI = {
  // POST /api/v1/admin/transparency — upload PDF (multipart/form-data)
  upload: async (payload: TransparencyUploadPayload) => {
    const formData = new FormData();
    formData.append("title", payload.title);
    formData.append("file_type", payload.file_type);
    formData.append("year", payload.year.toString());
    formData.append("file", payload.file);

    const response = await api.post("/v1/admin/transparency", formData);
    return response.data;
  },

  // PUT /api/v1/admin/transparency/:id — update file (multipart/form-data)
  update: async (id: number, payload: TransparencyUpdatePayload) => {
    const formData = new FormData();
    if (payload.title) formData.append("title", payload.title);
    if (payload.file_type) formData.append("file_type", payload.file_type);
    if (payload.year) formData.append("year", payload.year.toString());
    if (payload.file) formData.append("file", payload.file);

    const response = await api.put(`/v1/admin/transparency/${id}`, formData);
    return response.data;
  },

  // DELETE /api/v1/admin/transparency/:id — delete file + Cloudinary cleanup
  delete: async (id: number) => {
    const response = await api.delete(`/v1/admin/transparency/${id}`);
    return response.data;
  },
};

export default transparencyAPI;
