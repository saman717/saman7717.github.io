<template>
  <div class="relative bg-blue-400 rounded-2xl m-4">
    <div class="m-1 relative w-[98%] lg:w-[90%] mx-auto swiper-container overflow-hidden" ref="swiperContainer">

      <div class="swiper-wrapper">
        <div 
          v-for="(product, index) in products.slice(0,10)" 
          :key="index" 
          class="swiper-slide">
              <cardproduct :product="product" />
        </div>
  
      </div>
        <div class="absolute swiper-button-next" ref="nextBtn"></div>
          <div class="absolute  swiper-button-prev" ref="prevBtn"></div>

          <div div class="swiper-pagination"></div>


      </div>
    
  </div>
  
</template>

  
  <script setup>
 import { ref, onMounted } from 'vue';
import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import cardproduct from './cardproduct.vue';

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const swiperContainer = ref(null);
const nextBtn = ref(null);
const prevBtn = ref(null);

onMounted(() => {
  new Swiper(swiperContainer.value, {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: nextBtn.value,
      prevEl: prevBtn.value,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});

  </script>
  
  <style scoped>
.swiper-container {
  padding: 20px 0;
  position: static;  /* change of realtive to static*/
    z-index: auto; 
  border-radius: 10px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative; 
  z-index: 1; /* card product not fron of menu*/
}

.swiper-button-next,
.swiper-button-prev {
  color: #4a5568;
  background: white;
  width: 40px;
  height: 40px;
  margin: 0 76px;
  border-radius: 50%;
  top: 40%;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10; 
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
}
</style>