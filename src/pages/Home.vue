<script setup>
import { ref, onMounted } from "vue";
import api from "../utils/axios";
import CardSkeleton from "../components/skeleton/CardSkeleton.vue";
import BanerHomePage from "../components/skeleton/BanerHomePageSkelton.vue";
import product from "../components/layot/product.vue";
import BanerHomPage from '../components/layot/BanerHomPage.vue'
import CategoryProductSection from '../components/layot/CategoryProductSection.vue'
import ProductCarousel from '../components/layot/ProductCarousel.vue'
import CofeeClube from "../components/layot/CofeeClube.vue";
import CardArticle from "../components/layot/CardArticle.vue";
import TextAD from "../components/layot/TextAD.vue";


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

<template>

  <div class="">
    <div class="">
      <!-- <ProductCarousel v-if="!isLoading" :products="products" /> -->
      <product v-if="!isLoading" :products="products" />
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-8 lg:p-20">
        <CardSkeleton v-for="n in 8" :key="n" />
      </div>

      <BanerHomPage v-if="!isLoading" class="mt-40" />
      <BanerHomePage v-else class="" />

      <CategoryProductSection />
      <ProductCarousel :products="products.slice(0, 20)" />

      <CofeeClube />

      <TextAD />


    </div>
  </div>

</template>
