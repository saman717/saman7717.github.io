import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    totalPrice: (state) => {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  actions: {
    addToCart(product) {
      const existingItem = this.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity(productId) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(productId) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.cartItems = this.cartItems.filter((item) => item.id !== productId);
      }
    },
  },
});
