import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("hibret_admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle responses and errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Network error (backend not running, CORS blocked, etc.)
    if (!error.response) {
      console.error("Network error: backend may be unreachable.");
      return Promise.reject(error);
    }

    // Token expired or invalid — clear auth and redirect to login
    if (error.response.status === 401) {
      localStorage.removeItem("hibret_admin_token");
      localStorage.removeItem("hibret_admin_data");
      window.location.href = "/admin";
      return Promise.reject(error);
    }

    // Rate limited (login attempts exceeded)
    if (error.response.status === 429) {
      console.warn("Rate limited:", error.response.data?.message);
    }

    return Promise.reject(error);
  },
);

export default api;
