import { defineStore } from "pinia";
import { ref, watch, onMounted } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme.value);
  };
  // Sets the "dark" class on `<html>` when the `theme` value changes
  watch(theme, (newTheme) => {
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  });
  // If the user previously had dark mode, it is applied when the page loads
  onMounted(() => {
    if (theme.value === "dark") {
      document.documentElement.classList.add("dark");
    }
  });

  return { theme, toggleTheme };
});
