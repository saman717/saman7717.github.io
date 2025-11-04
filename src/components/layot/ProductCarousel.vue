<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import cardproduct from "./cardproduct.vue";

const props = defineProps({
  products: Array,
});

// دکمه‌ها و نمونه اسلایدر
const nextButton = ref(null);
const prevButton = ref(null);
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;

  // اتصال navigation بعد از mount کامل
  swiper.params.navigation.prevEl = prevButton.value;
  swiper.params.navigation.nextEl = nextButton.value;
  swiper.navigation.init();
  swiper.navigation.update();
};
</script>

<template>
  <div class="relative bg-white dark:bg-zinc-900 p-6 lg:p-12 rounded-xl">

    <!-- دکمه‌های ناوبری -->
    <div class="flex justify-end items-center gap-3 mb-6">
      <button ref="prevButton" class="nav-btn">‹</button>
      <button ref="nextButton" class="nav-btn">›</button>
    </div>

    <!-- اسلایدر محصولات -->
    <Swiper
      v-if="products && products.length"
      :modules="[Navigation, Autoplay]"
      :loop="true"
      :slides-per-view="4"
      :space-between="30"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :allow-touch-move="true"
      :simulate-touch="true"
      :grab-cursor="true"
      @swiper="onSwiper"
      :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 10 },
        576: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 2.5, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 25 },
        1280: { slidesPerView: 4, spaceBetween: 30 }
      }"
      class="swiper-main"
    >
      <SwiperSlide
        v-for="(product, index) in products"
        :key="index"
        class="slide-item"
      >
        <cardproduct :product="product" />
      </SwiperSlide>
    </Swiper>

  </div>
</template>

<style scoped>
.swiper-main {
  width: 100%;
  height: auto;
  padding-bottom: 15px;
}

.slide-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-btn {
  background: #fb923c;
  color: #fff;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.nav-btn:hover {
  background: #f97316;
  transform: scale(1.1);
}
</style>
