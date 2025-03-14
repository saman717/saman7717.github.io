<template>
  <div>
    <h2 class="text-center mt-5 text-2xl font-bold mb-4">محصولات</h2>
    
    <ProductCarousel v-if="!isLoading" :products="products" />
    
    <div v-else class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CardSkeleton v-for="n in 4" :key="n" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../utils/axios";
import ProductCarousel from "../components/layot/ProductCarousel.vue";
import CardSkeleton from "../components/CardSkeleton.vue"; 

const products = ref([]);
const isLoading = ref(true);

const fetchProducts = async () => {
  try {
    const response = await api.get("/products");
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error.response?.data || error.message);
  } finally {
    isLoading.value = false; 
  }
};

onMounted(() => {
  fetchProducts();
});
</script>
د