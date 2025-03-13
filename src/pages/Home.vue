<template>
 
 <ProductCarousel :products="products" />
</template>


<script setup>
import { ref, onMounted } from "vue";
import api from "../utils/axios";
import ProductCarousel from "../components/layot/ProductCarousel.vue";

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await api.get("/products"); // فرض می‌کنیم endpoint محصولات /products است
    products.value = response.data; // اطمینان حاصل کن ساختار response با آرایه محصولات مطابقت داشته باشد
    
  } catch (error) {
    console.error("Error fetching products:", error.response?.data || error.message);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>