<script setup>
import { onMounted, nextTick } from 'vue';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import cardproduct from './cardproduct.vue';

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

onMounted(async () => {
  await nextTick();

  setTimeout(() => {
    new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
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

    console.log("تمام داده‌ها دریافت شدند و اسلایدر آماده است.");
  }, 100);
});
</script>

<template>
  <div class="relative bg-white dark:bg-zinc-900 p-6 rounded-xl container lg:p-20">

    <!-- دکمه‌های ناوبری بالا کنار هم -->
    <div class="flex justify-end items-center gap-x-3 mb-6">
      <div class="swiper-button-prev custom-nav-btn"></div>
      <div class="swiper-button-next custom-nav-btn"></div>
    </div>

    <!-- اسلایدر -->
    <div class="swiper-container overflow-hidden">
      <div class="swiper-wrapper">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="swiper-slide"
        >
          <cardproduct :product="product" />
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.swiper-container {
  padding: 20px 0;
  position: static;
  z-index: auto;
  border-radius: 10px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

/* دکمه‌های ناوبری */
.swiper-button-next,
.swiper-button-prev {
  position: static; /* خیلی مهم */
  color: #fff;
  background: #fb923c;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

/* آیکون فلش داخل دکمه */
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
}

/* افکت هاور برای دکمه‌ها */
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: #f97316; /* رنگ نارنجی روشن‌تر */
  transform: scale(1.1);
  transition: all 0.3s ease;
}
</style>


