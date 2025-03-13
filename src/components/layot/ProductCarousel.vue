<template>
    <div class="m-6 swiper-container overflow-hidden ">
      <div class="swiper-wrapper">
        <div 
          v-for="(product, index) in products.slice(0,12)" 
          :key="index" 
          class="swiper-slide"
        >
          <cardproduct :product="product" />
        </div>
      </div>
  
      <!-- دکمه‌های ناوبری -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
  
      <!-- نقاط پاژینیشن -->
      <div class="swiper-pagination"></div>
    </div>
  </template>
  
  <script>
  // Import Swiper و ماژول‌های مورد نیاز
  import { Swiper } from 'swiper'; // هسته اصلی Swiper
  import { Navigation, Pagination } from 'swiper/modules'; // ماژول‌های Navigation و Pagination
  import 'swiper/swiper-bundle.css'; // استایل‌های Swiper
  import cardproduct from './cardproduct.vue';
  
  export default {
    components: { cardproduct },
    props: {
      products: {
        type: Array,
        required: true,
      },
    },
    mounted() {
      new Swiper('.swiper-container', {
        modules: [Navigation, Pagination], // ماژول‌های استفاده‌شده
        loop: false, // اسلاید بی‌نهایت
        slidesPerView: 4, // تعداد اسلایدهای قابل مشاهده
        spaceBetween: 30, // فاصله بین اسلایدها
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
    },
  };
  </script>
  
  <style scoped>
.swiper-container {
  padding: 20px 0;
  position: relative; /* برای قرارگیری صحیح پاژینیشن */
}

.swiper-pagination {
  position: absolute; /* قرارگیری پاژینیشن در پایین کاروسل */
  bottom: 10px !important; /* کاهش فاصله از پایین */
  margin-top: 10px !important; /* فاصله از بالا */
}

.swiper-pagination-bullet {
  margin: 0 6px !important; /* فاصله بین نقاط */
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* فاصله زیر کارت محصول */
}

.swiper-button-next,
.swiper-button-prev {
  color: #4a5568;
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  top: 45%; /* تنظیم موقعیت عمودی دکمه‌ها */
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
}
</style>