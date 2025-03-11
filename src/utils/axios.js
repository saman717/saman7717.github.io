import axios from "axios";

const api = axios.create({
  baseURL: "/api", // استفاده از Proxy که در Vite تنظیم شده
  headers: {
    "Content-Type": "application/json",
  },
});

// افزودن توکن JWT به هدر درخواست‌ها (در صورت وجود توکن)
api.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
