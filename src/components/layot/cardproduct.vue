<script setup>
import { defineProps, ref } from "vue";
import shopingcard from "@/assets/svg/shopingcard.svg";
import ArrowsRightLeft from "@/assets/svg/ArrowsRightLeft.svg";
import star from "@/assets/svg/star.svg";
import defaultImage from "@/assets/images/img/p1.png"

import { useCartStore } from "@/store/cartStore";

const cartStore = useCartStore();


const addToCart = () => {
  cartStore.addToCart(props.product);
  console.log(cartStore.cartItems);

};

const props = defineProps({
  product: Object,
});

// Select the first product image or display the default image
const productImage = ref(props.product?.images?.[0] || defaultImage);

const handleImageError = () => {
  productImage.value = defaultImage;
};

</script>



<template>
<div class="flex items-center justify-center rounded-xl container hover:scale-102 transition-all duration-300 ">
  <div
    class="md:w-[270px] md:h-[430px] w-[270px] h-[347px] bg-white dark:bg-zinc-800 rounded-2xl p-2 border border-gray-200 dark:border-zinc-700 shadow-md hover:shadow-lg transition-all duration-300"
  >
    <div class="relative rounded-2xl overflow-hidden">
      <img
        class="rounded-t-2xl w-full h-[200px] md:h-[250px] object-cover"
        :src="productImage"
        alt="Product Image"
        @error="handleImageError"
      />
      <div
        class="bg-orange-300 w-12 h-6 absolute top-5 right-5 rounded-2xl flex justify-center items-center text-white font-mora text-base"
      >
        13%
      </div>
    </div>

    <div class="p-2 mt-1">
      <h3
        class="font-DanaMedium h-10 md:h-[57px] overflow-hidden text-base md:text-xl text-zinc-700 dark:text-white line-clamp-1"
      >
        {{ props.product.title || "محصول بدون نام" }}
      </h3>
    </div>

    <div class="p-2 pt-1">
      <p class="dark:text-green-400 text-green-600 font-DanaMedium text-sm md:text-base">
        {{ props.product.price || "نامشخص" }} <span>تومان</span>
      </p>
    </div>

    <div class="flex justify-between items-center mt-3 mb-2 gap-x-2">
      <div class="flex items-center gap-x-2">
        <div class="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-neutral-300/40 dark:bg-white">
          <shopingcard
            class="w-5 h-5 lg:w-6 lg:h-6 text-black/50 hover:text-white dark:hover:text-black transition-all cursor-pointer"
            @click="addToCart"
          />
        </div>
        <div class="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-neutral-300/40 dark:bg-white">
          <ArrowsRightLeft
            class="w-5 h-5 lg:w-6 lg:h-6 text-black/50 hover:text-white dark:hover:text-black transition-all cursor-pointer"
          />
        </div>
      </div>

      <div class="flex items-center gap-x-0.5 text-white/60 dark:text-white">
        <star class="w-4 h-4 text-orange-300" fill="oklch(0.837 0.128 66.29)" />
        <star class="w-4 h-4 text-orange-300" fill="oklch(0.837 0.128 66.29)" />
        <star class="w-4 h-4 text-orange-300" fill="oklch(0.837 0.128 66.29)" />
        <star class="w-4 h-4" />
        <star class="w-4 h-4" />
      </div>
    </div>
  </div>
</div>

</template>
