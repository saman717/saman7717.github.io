// store/auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
  }),
  actions: {
    setUser(userData, token) {
      this.user = userData;
      this.token = token;
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);
    },
    updateUser(newData) {
      this.user = { ...this.user, ...newData };
      localStorage.setItem("user", JSON.stringify(this.user));
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});
