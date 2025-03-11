import axios from "axios";

// آدرس پایه API
const API_URL = "http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// افزودن توکن JWT به هدر درخواست‌ها (در صورت وجود توکن)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
