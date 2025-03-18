<template>
    
 <div class="z-[9000] flex md:hidden items-center justify-between h-16 w-full bg-white dark:bg-zinc-700 px-4">
      <!-- NAV ICON -->
      <div>
        <!-- <svg class="w-6 h-6 dark:text-white cursor-pointer" @click="togglemenu">
          <use xlink:href="#bar3"></use>
        </svg> -->

      </div>

      <!-- menu mobile -->

      <div v-if="isopen" v-cloak
        class="fixed top-0 right-0 bottom-0 w-64 min-h-screen bg-white pt-3 px-4 dark:bg-zinc-700">
        <!-- header mobilmenu -->
        <div class="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-300 dark:border-b-white">
          <div class="flex items-center gap-x-3.5">
            <img src="./asset/app-logo.png" alt="" class="block w-[42px] h-10" />

            <!-- <svg class="w-[100px] h-10 text-orange-300">
              <use xlink:href="#logo"></use>
            </svg> -->
          </div>
          <div @click="close" class="cursor-pointer">
            <!-- <svg class="w-6 h-6 dark:text-white">
              <use xlink:href="#x-mark"></use>
            </svg> -->
          </div>
        </div>
        <!-- main and li... -->
        <div>
          <div class="flex items-center rounded-md mb-4 bg-orange-200/30 pr-2 text-orange-300 h-10">
            <a href="#" class="flex items-center gap-x-1.5">
              <!-- <svg class="w-[20px] h-[20px]">
                <use xlink:href="#home"></use>
              </svg> -->

              صفحه اصلی
            </a>
          </div>
          <ul class="text-black space-y-6 dark:text-white child:pr-2.5">
            <li>
              <div class="flex items-center justify-between">
                <a href="#" class="flex items-center gap-x-1.5">
                  <!-- <svg class="w-[20px] h-[20px]">
                    <use xlink:href="#shopping-cart"></use>
                  </svg> -->

                  فروشگاه
                </a>
                <span @click="submenufunction" :class="{'rotate-180': submenu, 'rotate-0': !submenu}"
                  class="transition-all cursor-pointer">
                  <!-- <svg class="w-[20px] h-[20px]">
                    <use xlink:href="#chevron-down"></use>
                  </svg> -->
                </span>
              </div>
              <div v-if="submenu" class="flex flex-col gap-y-3 pr-7 mt-3 text-sm text-zinc-600 dark:text-white">
                <a href="#"> قهوه ویژه </a>
                <a href="#"> قهوه ویژه </a>
                <a href="#"> قهوه ویژه </a>
                <a href="#"> قهوه ویژه </a>
                <a href="#"> قهوه ویژه </a>
              </div>
            </li>
          </ul>
        </div>
        <!-- footer and log in and dark and light... -->
        <div
          class="flex flex-col px-2.5 font-DanaMedium cursor-default space-y-6 pt-8 mt-8 border-t border-t-gray-300 dark:border-t-white">
          <div class="inline-block">
            <a class="inline-flex items-center gap-x-1 text-orange-300" href="">
              <!-- <svg class="w-6 h-6 inline-flex dark:text-orange-300">
                <use xlink:href="#arrow-right-end-on-rectangle"></use>
              </svg> -->

              ورود| ثبت نام
            </a>
          </div>

          <div class="inline-block">
            <span @click="toggleTheme" class="inline cursor-pointer text-orange-300 gap-x-1">
              <!-- <svg class="w-6 h-6 inline-flex">
                <use :xlink:href="themeMood"></use>
              </svg> -->

              تم {{titlethem}}
            </span>
          </div>
          <div class="inline-block">
            <a class="inline-flex gap-x-1 text-orange-300" href=" #">
              <!-- <svg class="w-6 h-6 text-orange-300">
                <use xlink:href="#shopping-cart "></use>
              </svg> -->
              سبد خرید
            </a>
          </div>
        </div>
      </div>





      <!-- shoppin section mobile -->


      <!-- LOGO  -->
      <div>
        <!-- <svg class="w-[100px] h-10 text-orange-300">
          <use xlink:href="#logo"></use>
        </svg> -->
      </div>

      <!-- SHOP LOGO   -->
      <div>
        <!-- <svg @click="listfunc" class="w-6 h-6 dark:text-white">
          <use xlink:href="#shopping-cart"></use>
        </svg> -->
      </div>

      <!-- shop click -->
      <div v-cloak v-if="shopinglist"
        class="fixed top-0 left-0 bottom-0 w-[75%] min-h-screen bg-white pt-3 px-4 dark:bg-zinc-700">
        <div class=" pb-5 flex items-center justify-between">
          <!-- <svg @click="closlist" class="w-6 h-6 dark:text-white">
            <use xlink:href="#x-mark"></use>
          </svg> -->

          <a href="#" class="font-DanaDemiBold dark:text-white "> سبد خرید </a>
        </div>
        <!-- main body -->
        <div class="max-h-[80%] overflow-scroll">
          <div :class="{'border-b border-b-gray-300 dark:border-b-white/10': products.length > 0}"
            class=" overflow-y-auto scrollbar-custom h-[20px ]   p-1 divide-y divide-gray-100 dark:divide-white/10 child:py-5">
            <!-- بررسی و اطمینان از بارگذاری داده‌ها -->
            <div v-if="products.length" v-for="(product, index) in products" :key="index" class="flex gap-x-2.5">
              <img :src="product.img" class="w-[120px] h-[120px]" alt="product1" />
              <div class="flex flex-col justify-between">
                <h4 class="font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2">
                  {{ product.title }}
                </h4>
                <div>
                  <span class="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium tracking-tighter">
                    {{ product.discount }} تومان تخفیف
                  </span>
                  <div class="text-zinc-700 dark:text-white tracking-wider font-DanaMedium">
                    {{ product.price }}
                    <span class="font-Dana">تومان</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- در صورتی که محصولات خالی باشند -->
            <div v-else class="flex mt-10  flex-col items-center text-center font-DanaMedium text-gray-500 dark:text-white">
              <p class="">محصولی برای نمایش وجود ندارد</p>
              <!-- <svg class="w-10 h-10 text-gray-600 dark:text-white">
                <use xlink:href="#empty"></use>
              </svg> -->
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4 ">

          <div v-if="products.length>0" class="mt-1.5 w-[50%] ">
            <a href="#"
              class="h-14 w-[100%] tracking-tightest flex items-center justify-center rounded-xl font-Dana bg-teal-600 dark:bg-emerald-500 dark:hover:bg-emerald-700 text-white hover:bg-teal-700 transition-colors">
              ثبت سفارش
            </a>
          </div>
          <div>
            <div v-if="products.length>0" class="text-zinc-700 dark:text-white tracking-wider font-DanaMedium">
              {{formattedTotalPrice}}
              <span class="font-Dana">تومان </span>
            </div>
          </div>
        </div>
      </div>


      <!-- shoping foter  -->


    </div>

</template>


<script setup>
import { ref, computed } from 'vue';

// کنترل نمایش منوی موبایل
const isopen = ref(false);

// کنترل نمایش بخش سبد خرید موبایل
const shopinglist = ref(false);

// فرض کنید محصولات در یک آرایه ذخیره می‌شوند؛ در صورت لزوم این آرایه را پر کنید
const products = ref([]);

// محاسبه قیمت کل محصولات (اگر در بخش سبد خرید استفاده می‌شود)
const totalPrice = computed(() => {
  return products.value.reduce((sum, product) => sum + product.price, 0);
});

// قالب‌بندی قیمت کل (مثال)
const formattedTotalPrice = computed(() => {
  return new Intl.NumberFormat('fa-IR').format(totalPrice.value);
});

// توابع مربوط به منوی موبایل
const togglemenu = () => {
  isopen.value = !isopen.value;
};

const close = () => {
  isopen.value = false;
};

// توابع مربوط به بخش سبد خرید
const listfunc = () => {
  shopinglist.value = true;
};

const closlist = () => {
  shopinglist.value = false;
};

// توابع مربوط به زیر منو (برای فروشگاه)
const submenu = ref(false);
const submenufunction = () => {
  submenu.value = !submenu.value;
};

// توابع مربوط به تغییر تم (نمونه)
const themeMood = ref('#icon-id'); // آیکون مورد نظر را تنظیم کنید
const titlethem = ref('تیره');
const toggleTheme = () => {
  titlethem.value = titlethem.value === 'تیره' ? 'روشن' : 'تیره';
};
</script>
