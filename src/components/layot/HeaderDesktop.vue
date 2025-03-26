<script setup>
import SectionSubHaeder from './SectionSubHaeder.vue';
import ShoppingCardIcon from '../../assets/shopingcard.svg';
import ArrowRightEndOnRectangle from '../../assets/ArrowRightEndOnRectangle.svg';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import empty from '../../assets/empty.svg';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import menu from "../../../menu.json"
import { useThemeStore } from "../../store/them"
import { useAuthStore } from '../../store/auth';
import { useCartStore } from "../../store/cartStore";

const cartStore = useCartStore()


const themeStore = useThemeStore();


const items = ref(menu?.MenuItemsHeader ?? []);
const products = ref([
  // { id: "1", title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی", img: "./asset/products/p1.png", discount: "14,500", price: "175,000" },
  // { id: "2", title: "چای سیاه ممتاز دارچین", img: "./asset/products/p2.png", discount: "10,000", price: "100,000" },
  // { id: "3", title: "شکلات تلخ 85%", img: "./asset/products/p3.png", discount: "8,000", price: "80,000" },
  // { id: "4", title: "دمنوش گل محمدی", img: "./asset/products/p4.png", discount: "5,000", price: "50,000" },
  // { id: "5", title: "دمنوش گل محمدی", img: "./asset/products/p4.png", discount: "5,000", price: "50,000" },
  // { id: "6", title: "دمنوش گل محمدی", img: "./asset/products/p4.png", discount: "5,000", price: "50,000" },
  // { id: "7", title: "دمنوش گل محمدی", img: "./asset/products/p4.png", discount: "200,000", price: "1,200,000", }
])
const route = useRoute();

const authStore = useAuthStore();  // user of state
const isActive = (url) => route.path === url;




const isAuthenticated = computed(() => authStore.user !== null);
</script>






<template>
  <header class="sticky z-[5000] font-dana top-9 right-0 left-0 items-center w-[98%] lg:w-[90%] hidden md:flex h-24 
     rounded-4xl mx-auto px-5 lg:px-10 py-5 bg-black/50 backdrop-blur-[6px] relative">

    <div class="flex relative items-center w-full justify-between">
      <nav class="flex items-center gap-x-5 lg:gap-x-9 h-14">
        <div class="shrink-0">
          <img src="/src/assets/app-logo.png" alt="" />
        </div>
        <!-- section menu bar -->
        <ul class="flex  items-center lg:gap-x-9 h-full text-gray-300">
          <li v-for="item in items" :key="item.id" class=" group">
            <!-- MAin link -->
            <RouterLink v-if="item.url" :to="item.url"
              :class="{ 'text-orange-300': isActive(item.url), 'text-white': !isActive(item.url) }" class="p-1">
              {{ item.title }}
            </RouterLink>

            <!-- Submenu -->
            <div v-if="item.submenu && item.submenu.length"
              class="z-[6000]  top-full leading-normal opacity-0 invisible group-hover:visible group-hover:opacity-100 absolute tracking-normal space-y-4 p-6 w-52 bg-white dark:bg-zinc-800 dark:text-white shadow-normall text-zinc-700 rounded-2xl border-t-[3px] transition-all border-t-orange-300 child:inline-block child:transition-colors child-hover:text-orange-300">
              <RouterLink v-for="sub in item.submenu" :key="sub.id" :to="sub.url"
                class="relative group/a block transition-all hover:pr-[28px]">
                <span
                  class="absolute right-0 top-1/2 w-0 h-[0.5] bg-orange-300 rounded-full transition-all delay-75 group-hover/a:w-6 group-hover/a:h-[2px]"></span>
                {{ sub.title }}
              </RouterLink>
            </div>
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
                <div class="cursor-default flex items-center justify-between font-DanaMedium text-xs tracking-tighter">
                  <span class="text-gray-300">{{ cartStore.cartItems.length }} مورد
                  </span>
                  <a href="#" class="flex text-orange-300 items-center text-base justify-center">
                    مشاهده سبد خرید

                  </a>
                </div>
                <!-- body card sabad -->
                <div :class="{ 'h-[350px]': cartStore.cartItems.length > 2 }"
                  class="border-b overflow-y-auto scrollbar-custom border-b-gray-300 dark:border-b-white/10 pb-7 divide-y-2 divide-gray-100 dark:divide-white/10 child:py-6">
                  <!-- procces data and control -->
                  <div v-if="cartStore.cartItems.length" v-for="(product, index) in cartStore.cartItems" :key="index"
                    class="flex mt-5 mb-5 gap-x-2.5 h-[165px] w-[343px] gap-6">
                    <img :src="product.images" class="w-[120px] h-[120px] rounded-lg" alt="product1" />
                    <div class="flex flex-col justify-between">
                      <h4 class="font-dana text-zinc-700 w-[188px] dark:text-white text-base line-clamp-2">
                        {{ product.title }}
                      </h4>
                      <div class="mb-4 pl-6 flex items-center justify-between"> 
                        <div class="flex-1">
                          <span class="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium tracking-tighter">
                          {{ product.discount }} تومان تخفیف
                          </span>
                          <div class="text-zinc-700 dark:text-white tracking-wider font-DanaMedium">
                          {{ product.price }}
                          <span class="font-Dana">تومان</span>
                          </div>
                        </div>
                        <div class="flex-none rounded-2xl h-[40px] bg-orange-300 text-white w-15 flex items-center justify-center">
                          <span class=""> +  </span> {{ product.quantity }} <span class="">   - </span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <!-- if is empty-->
                  <div v-else
                    class="flex mt-8 mb-8 flex-col items-center text-center font-DanaMedium text-gray-500 dark:text-white">
                    محصولی برای نمایش وجود ندارد
                    <empty class="w-9 h-8" />
                  </div>
                </div>

                <!-- footer card sabad -->
                <div class="flex justify-between mt-5">
                  <div class="">
                    <span class="text-gray-300 text-xs font-DanaMedium tracking-tighter">
                      مبلغ قابل پرداخت
                    </span>
                    <div class="text-zinc-700 dark:text-white tracking-wider font-DanaMedium">
                      {{ formattedTotalPrice }}
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
          <div @click="themeStore.toggleTheme" class="cursor-pointer">
            <moon v-if="themeStore.theme === 'light'" class="h-8 w-9 text-orange-200 " />
            <sun v-else class="h-8 w-9 text-orange-200" />
          </div>
        </div>
        <!-- divide boedder  -->
        <span class="block w-px h-14 bg-white/20"></span>

        <!-- login Link   -->
        <div v-if="isAuthenticated">
          <div class="flex flex-col items-center gap-x-2.5">
            <router-link to="/dashbord" class="flex flex-col items-center gap-y-0.5">
              <img :src="authStore.user.avatar" alt="Profile Picture" class="h-8 w-8 rounded-full" />
              <span>{{ authStore.user.name }}</span>

            </router-link>

          </div>
        </div>
        <div v-if="!isAuthenticated" class="flex items-center justify-center gap-x-0.5">
          <RouterLink to="/login" class="flex items-center gap-x-2.5 tracking-tightest">
            <ArrowRightEndOnRectangle class="h-8 w-9" />
            <span class="hidden xl:inline-block">ورود </span>
          </RouterLink>
          <router-link to="/signup">
            <span class="hidden xl:inline-block"> | ثبت نام </span>

          </router-link>
        </div>

      </div>
    </div>
  </header>

  <div
    class="mt-[50px] md:mt-[-110px] min-h-[300px] md:min-h-screen bg-[url('/src/assets/headerBgMobile.webp')] md:bg-[url('/src/assets/headerBgDesktop.webp')] rounded-bl-[10%] w-full rounded-br-[10%] bg-[length:100%_100%] bg-no-repeat flex flex-col">
    <SectionSubHaeder />
  </div>

</template>






<style>
.group:hover>ul {
  opacity: 1;
  visibility: visible;
}
</style>
