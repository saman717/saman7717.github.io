import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import { useToastStore } from "@/store/toastStore"; // import یکبار
import router from "../router";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  }),
  getters: {
    totalPrice: (state) => {
      return state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    syncCartFromLocalStorage() {
      const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      this.cartItems = storedItems;
    },

    saveCartToLocalStorage() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },

    addToCart(product) {
      const authStore = useAuthStore();
      if (!authStore.user) {
        alert("Please log in to add items to the cart.");
        router.push("/login");
        return;
      }

      const existingItem = this.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
      this.saveCartToLocalStorage();
      
      // اضافه کردن toast
      const toastStore = useToastStore();
      toastStore.showToast("محصول به سبد خرید اضافه شد!", "success");
    },

    increaseQuantity(productId) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item) {
        item.quantity += 1;
        this.saveCartToLocalStorage();
        
        const toastStore = useToastStore();
        toastStore.showToast("محصول به سبد خرید اضافه شد!", "success");
      }
    },

    decreaseQuantity(productId) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.cartItems = this.cartItems.filter((item) => item.id !== productId);
      }
      this.saveCartToLocalStorage();
    },

    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
      this.saveCartToLocalStorage();
      
      const toastStore = useToastStore();
      toastStore.showToast("محصول از سبد خرید حذف شد", "info");
    },
  },
});

// فقط در مرورگر اجرا شود
if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key === "cartItems") {
      const cartStore = useCartStore();
      cartStore.syncCartFromLocalStorage();
    }
  });
}