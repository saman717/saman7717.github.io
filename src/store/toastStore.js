import { defineStore } from "pinia";
import { ref } from "vue";

export const useToastStore = defineStore("toast", () => {
  const toasts = ref([]);
  const duration = 3000; // مدت زمان نمایش توست

  const showToast = (message, type = "success") => {
    const id = Date.now();
    const toast = { id, message, type };

    toasts.value.push(toast);

    // حذف توست بعد از `duration` میلی‌ثانیه
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id);
    }, duration);
  };

  return { toasts, showToast, duration };
});
