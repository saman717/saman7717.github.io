import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(product) {
      const existingItem = this.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1; // افزایش تعداد
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
  },
});
