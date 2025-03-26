import { defineStore } from "pinia";
import { ref, watch, onMounted } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme.value);
  };

  // وقتی مقدار theme تغییر کنه، کلاس "dark" رو روی <html> ست می‌کنه
  watch(theme, (newTheme) => {
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  });

  // اگه کاربر از قبل تم تاریک داشته باشه، در زمان لود شدن صفحه تنظیم میشه
  onMounted(() => {
    if (theme.value === "dark") {
      document.documentElement.classList.add("dark");
    }
  });

  return { theme, toggleTheme };
});
