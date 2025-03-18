<template >
    <header  
    class="z-[5000] top-9 right-0 left-0 items-center w-[98%] lg:w-[90%] hidden md:flex h-24 
     rounded-4xl mx-auto px-5 lg:px-10 py-5 bg-black/50 backdrop-blur-[6px] relative">
  
    <div class="flex items-center w-full justify-between">
      <nav class="flex items-center gap-x-5 lg:gap-x-9 h-14">
        <div class="shrink-0">
          <img src="./asset/app-logo.png" alt="" />
        </div>
        <!-- section menu bar -->
        <ul class="flex gap-x-5 items-center lg:gap-x-9 h-full child:leading-[56px] text-gray-300 tracking-tightest">
          <li class="font-DanaMedium text-orange-200">
            <a href="#"> صفحه اصلی </a>
          </li>

          <li class="relative group">
            <a href="#" class="group-hover:text-orange-300 transition-all">
              فروشگاه</a>
            <!-- submnu -->
            <div
              class="z-[6000] top-full leading-normal opacity-0 invisible group-hover:visible group-hover:opacity-100 absolute tracking-normal space-y-4 p-6 w-52 bg-white dark:bg-zinc-800 dark:text-white shadow-normall text-zinc-700 rounded-2xl border-t-[3px] transition-all border-t-orange-300 child:inline-block child:transition-colors child-hover:text-orange-300">
              <a href="#" class="relative group/a block transition-all hover:pr-[28px]">
                <span
                  class="absolute right-0 top-1/2 w-0 h-[0.5] bg-orange-300 rounded-full transition-all group-hover/a:w-6 group-hover/a:h-[2px]">
                </span>
                قهوه ویژه
              </a>
              <a href="#" class="relative group/a block transition-all hover:pr-[28px]">
                <span
                  class="absolute right-0 top-1/2 w-0 h-[0.5] bg-orange-300 rounded-full transition-all delay-75 group-hover/a:w-6 group-hover/a:h-[2px]">
                </span>
                ویژه در سطح جهانی
              </a>
              <a href="#" class="relative group/a block transition-all hover:pr-[28px]">
                <span
                  class="absolute right-0 top-1/2 w-0 h-[0.5] bg-orange-300 rounded-full transition-all delay-75 group-hover/a:w-6 group-hover/a:h-[2px]">
                </span>
                قهوه درجه یک
              </a>
              <a href="#" class="relative group/a block transition-all hover:pr-[28px]">
                <span
                  class="absolute right-0 top-1/2 w-0 h-[0.5] bg-orange-300 rounded-full transition-all delay-75 group-hover/a:w-6 group-hover/a:h-[2px]">
                </span>
                ترکیبات تجاری
              </a>
              <a href="#" class="relative group/a block transition-all hover:pr-[28px]">
                <span
                  class="z-10 absolute right-0 top-1/2 w-0 h-[0.5] bg-orange-300 rounded-full transition-all delay-75 group-hover/a:w-6 group-hover/a:h-[2px]">
                </span>
                کپسول قهوه
              </a>
              <a href="#" class="relative group/a block transition-all hover:pr-[28px]">
                <span
                  class="absolute right-0 top-1/2 w-0 h-[0.5] bg-orange-300 rounded-full transition-all delay-75 ease-in group-hover/a:w-6 group-hover/a:h-[2px]">
                </span>
                قهوه زینو برزیلی
              </a>
            </div>
          </li>
          <li>
            <a href="#"> دیکشنری</a>
          </li>

          <li>
            <a href="#"> بلاگ </a>
          </li>

          <li>
            <a href="#"> درباره ما </a>
          </li>
          <li>
            <a href="#"> تماس با ما </a>
          </li>
        </ul>
      </nav>
      <!-- icons left -->
      <div class="flex text-orange-200 gap-x-4 lg:gap-x-5 xl:gap-x-9">
        <!-- section stor and moon -->
        <div class="flex gap-x-4 lg:gap-x-5 items-center">
          <!-- store -->
          <div class="">
            <div class="py-3 relative group cursor-pointer ">
              <ShoppingCardIcon class="w-9 h-8" />
              <!-- show when hovered -->
              <div
                class="absolute z-10 w-[400px] cursor-default top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white dark:bg-zinc-700 p-5 rounded-2xl border-t-[3px] transition-all delay-75 border-t-orange-300 shadow-normall">
                <!-- header card sabad  -->
                <div
                  class="cursor-default flex items-center justify-between font-DanaMedium text-xs tracking-tighter">
                  <span class="text-gray-300">{{products.length}} مورد
                  </span>
                  <a href="#" class="flex text-orange-300 items-center text-base justify-center">
                    مشاهده سبد خرید
                    
                  </a>
                </div>
                <!-- body card sabad -->
                <div :class="{'h-[350px]': products.length > 2}"
                  class="border-b overflow-y-auto scrollbar-custom border-b-gray-300 dark:border-b-white/10 p-1 divide-y divide-gray-100 dark:divide-white/10 child:py-5">
                  <!-- بررسی و اطمینان از بارگذاری داده‌ها -->
                  <div v-if="products.length" v-for="(product, index) in products" :key="index"
                    class="flex gap-x-2.5">
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
                  <div v-else
                    class="flex flex-col items-center text-center font-DanaMedium text-gray-500 dark:text-white">
                    محصولی برای نمایش وجود ندارد
                    <empty class="w-9 h-8"/>
                  </div>
                </div>

                <!-- footer card sabad -->
                <div class="flex justify-between mt-5">
                  <div class="">
                    <span class="text-gray-300 text-xs font-DanaMedium tracking-tighter">
                      مبلغ قابل پرداخت
                    </span>
                    <div class="text-zinc-700 dark:text-white tracking-wider font-DanaMedium">
                      {{formattedTotalPrice}}
                      <span class="font-Dana">تومان </span>
                    </div>
                  </div>
                  <a href="#"
                    class="h-14 w-[144px] tracking-tightest flex items-center justify-center rounded-xl font-Dana bg-teal-600 dark:bg-emerald-500 dark:hover:bg-emerald-700 text-white hover:bg-teal-700 transition-colors">
                    ثبت سفارش
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- moon -->
          <div @click="toggleTheme">
            <moon class="h-8 w-8" />
          </div>
        </div>
        <!-- divide boedder  -->
        <span class="block w-px h-14 bg-white/20"></span>

        <!-- login Link   -->
        <a class="flex items-center gap-x-2.5 tracking-tightest" href="#">
          <arrowright class="h-8 w-9"/>
          <span class="hidden xl:inline-block">ورود | ثبت نام</span>
        </a>
      </div>
    </div>
  </header>
  <div class="mt-[-100px] h-[500px] rounded-bl-[10%] rounded-br-[10%] flex flex-col items-center justify-center"
     style="background-image: url('/src/assets/headerBgDesktop.webp'); background-size: cover; background-position: center;">
    <h1 class="text-white text-4xl font-bold">به سایت ما خوش آمدید</h1>
     <p class="text-white mt-2">توضیحاتی درباره سایت و خدمات</p>
  </div>

</template>

<script setup>
import ShoppingCardIcon from '../../assets/shopingcard.svg';
import arrowright from '../../assets/arrow-right-end-on-rectangle.svg';
import bar3 from '../../assets/bar3.svg';
import chavronDown from '../../assets/chavron-down.svg';
import chavronLeft from '../../assets/chevron-left.svg';
import empty from '../../assets/empty.svg';
import home from '../../assets/home.svg';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import xMark from '../../assets/x-mark.svg';
import { ref } from 'vue';
import { useAuthStore } from '../../store/auth'; // pinia auth


const products =ref( [
        // { id: "1", title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی", img: "./asset/products/p1.png", discount: "14,500", price: "175,000" },
        // { id: "2", title: "چای سیاه ممتاز دارچین", img: "./asset/products/p2.png", discount: "10,000", price: "100,000" },
        // { id: "3", title: "شکلات تلخ 85%", img: "./asset/products/p3.png", discount: "8,000", price: "80,000" },
        // { id: "4", title: "دمنوش گل محمدی", img: "./asset/products/p4.png", discount: "5,000", price: "50,000" },
        // { id: "5", title: "دمنوش گل محمدی", img: "./asset/products/p4.png", discount: "5,000", price: "50,000" },
        // { id: "6", title: "دمنوش گل محمدی", img: "./asset/products/p4.png", discount: "5,000", price: "50,000" },
        // { id: "7", title: "دمنوش گل محمدی", img: "./asset/products/p4.png", discount: "200,000", price: "1,200,000", }
    ])

const authStore = useAuthStore();  // user of state
</script>



