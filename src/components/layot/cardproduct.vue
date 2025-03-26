<template>
  <div
    class="flex items-center justify-center rounded-xl  container hover:scale-102 transition-all duration-300  ">
    <div class="md:w-[270px] md:h-[430px] w-[250px] h-[347px]  bg-zinc-700 dark:bg-white rounded-2xl shadow-[0_5px_10px_rgba(55,65,81,0.5)] dark:shadow-[0_5px_10px_rgba(255,255,255,0.5)]">
      <div class="relative   rounded-2xl">
        <img class="rounded-t-2xl w-full pt-0 h-[200px] md:h-[250px] object-cover" :src="productImage"px
          alt="Product Image" @error="handleImageError" />
        <img src="" alt="">
        <div class="bg-orange-300 w-12 absolute top-5 right-5 h-6 rounded-2xl flex 
          justify-center text-white text-center items-center font-mora text-base">
          13%
        </div>
      </div>

      <div class="p-2 mt-0.5 pt-2">
        <h3
          class="font-DanaMedium h-10 md:h-[57px] overflow-y-hidden text-base md:text-xl text-white dark:text-black line-clamp-1">
          {{ props.product.title || "محصول بدون نام" }}
        </h3>
      </div>

      <div class="p-2 pt-1">
        <p class="dark:text-green-800 text-green-600 font-DanaMedium text-sm md:text-base">
          {{ props.product.price || "نامشخص" }} <span>تومان</span>
        </p>
      </div>

      <div class="flex justify-between md:justify-between mt-3  mb-2 items-center gap-x-0">
        <div class="p-2 pt-0 flex items-center justify-center gap-x-1">
          <div
            class="flex w-[24px] h-[24px] lg:h-[34px] lg:w-[34px]  items-center justify-center bg-neutral-300/40 rounded-full">
            <shopingcard
              class="w-[19px] select-none h-[19px] lg:h-6 lg:w-6 text-black/50 hover:text-white dark:hover:text-black transition-all cursor-pointer"
              @click="addToCart" />
          </div>
          <div
            class="flex w-[24px]  h-[24px] lg:h-[34px] lg:w-[34px] items-center justify-center bg-neutral-300/40 rounded-full">
            <ArrowsRightLeft
              class="w-[19px] select-none h-[19px] lg:h-6 lg:w-6  text-black/50 hover:text-white  dark:hover:text-black transition-all cursor-pointer" />
          </div>
        </div>
        <div class="p-2 pt-0 flex items-center justify-center gap-x-2.5">
          <div class="flex flex-row-reverse items-center justify-center gap-0.5 text-white/60 dark:text-black/50">
            <star class="w-4 h-4 text-orange-300" fill="oklch(0.837 0.128 66.29)" />
            <star class="w-4 h-4 text-orange-300" fill="oklch(0.837 0.128 66.29)" />
            <star class="w-4 h-4 text-orange-300" fill="oklch(0.837 0.128 66.29)" />
            <star class="w-4 h-4" />
            <star class="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import shopingcard from "../../assets/shopingcard.svg";
import ArrowsRightLeft from "../../assets/ArrowsRightLeft.svg";
import star from "../../assets/star.svg";
import defaultImage from "../../assets/p1.png"
import { useCartStore } from "../../store/cartStore";

const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addToCart(props.product);
  console.log(cartStore.cartItems);
};

const props = defineProps({
  product: Object,
});

// انتخاب اولین تصویر محصول یا نمایش تصویر پیش‌فرض
const productImage = ref(props.product?.images?.[0] || defaultImage);

const handleImageError = () => {
  productImage.value = defaultImage;
};




</script>
