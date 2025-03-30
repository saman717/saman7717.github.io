<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useThemeStore } from "../../store/them"
import { useCartStore } from "../../store/cartStore";
import menu from "@/assets/static/menu.json";
import bar3 from '@/assets/svg/bar3.svg';
import logo from '@/assets/svg/logo.svg';
import xmark from '@/assets/svg/mark.svg';
import home from '@/assets/svg/home.svg'
import shopingcard from '@/assets/svg/shopingcard.svg'
import chevronDown from '@/assets/svg/chavronDown.svg'
import ArrowRightEndOnRectangle from '@/assets/svg/ArrowRightEndOnRectangle.svg'
import moon from '@/assets/svg/moon.svg';
import sun from '@/assets/svg/sun.svg';
import empty from "@/assets/svg/empty.svg";

const themeStore = useThemeStore();
const cartStore = useCartStore()
const isopen = ref(false)
const shopinglist = ref(false)
const openSubmenus = ref({});

const togglemenu = () => {
  isopen.value = !isopen.value
  shopinglist.value = false;
}

const toggleSubmenu = (id) => {
  openSubmenus.value[id] = !openSubmenus.value[id];
};

const ToggleShopingMobile = () => {
  shopinglist.value = !shopinglist.value;
  isopen.value = false
};
</script>


<template>
  <div
    class="fixed bg-white dark:bg-zinc-700 flex top-0 left-0 right-0 md:hidden z-[9000] items-center justify-between h-16 w-full p-4">
    <!-- logo menu -->
    <div class="">
      <bar3 class="w-6 h-6  dark:text-white cursor-pointer transime" @click="togglemenu" />
    </div>
    <!-- LOGO  -->
    <div>
      <logo class="w-[100px] h-10 text-orange-300" />
    </div>
    <!-- SHOP LOGO   -->
    <div>
      <shopingcard class="w-6 h-6 dark:text-white cursor-pointer" @click="ToggleShopingMobile" />
    </div>
    <!-- side menu right -->
    <div v-if="isopen" v-cloak
      class="fixed overflow-auto  top-0 right-0 bottom-0 w-64 min-h-screen bg-white dark:bg-zinc-700 pt-3 px-4 transform transime"
      :class="{
        'translate-x-0 opacity-100': isopen,
        'translate-x-full opacity-0': !isopen
      }">
      <!-- header mobilmenu -->
      <div
        class="flex sticky   top-0 bg-white dark:bg-zinc-700 transime items-center justify-between pb-5 mb-6 border-b border-b-gray-300 dark:border-b-white">
        <div class="flex items-center  gap-x-3.5">
          <img src="/src/assets/images/img/app-logo.png" alt="" class="block w-[42px] h-10" />
        </div>
        <logo class="w-15 h-15 text-orange-300" />
        <div @click="togglemenu" class="cursor-pointer">
          <xmark class="dark:text-white cursor-pointer" />
        </div>
      </div>
      <!-- main and li... -->
      <div>
        <ul class="space-y-6 text-orange-300 font-DanaMedium child:pr-2.5 pr-2">
          <li v-for="menuItem in menu.MenuItemsHeader" :key="menuItem.id">
            <div class="flex items-center justify-between">
              <a :href="menuItem.url" class="flex items-center gap-x-1.5">
                <home v-if="menuItem.title == 'صفحه اصلی'" class="w-[20px] h-[20px]" />
                <shopingcard v-if="menuItem.title === 'فروشگاه'" class="w-[20px] h-[20px]" />
                {{ menuItem.title }}
              </a>
              <span v-if="menuItem.submenu.length" @click="toggleSubmenu(menuItem.id)"
                :class="{ 'rotate-180': openSubmenus[menuItem.id] }"
                class="cursor-pointer transition-transform duration-300">
                <chevronDown class="w-[20px] h-[20px]" />
              </span>
            </div>
            <div class="overflow-hidden transition-all duration-300"
              :style="{ maxHeight: openSubmenus[menuItem.id] ? '300px' : '0px' }">
              <div class="flex flex-col gap-y-3 pr-7 mt-3 text-sm text-zinc-600 dark:text-white">
                <a v-for="submenu in menuItem.submenu" :key="submenu.id" :href="submenu.url">
                  {{ submenu.title }}
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- footer and log in and dark and light... -->
      <div
        class="flex flex-col px-2.5 font-DanaMedium cursor-default space-y-6 pt-8 mt-8 border-t border-t-gray-300 dark:border-t-white">
        <div class="inline-block">
          <a class="inline-flex items-center gap-x-1 text-orange-300" href="">
            <ArrowRightEndOnRectangle class="w-6 h-6 inline-flex dark:text-orange-300" />
            ورود| ثبت نام
          </a>
        </div>
        <div class="inline-block ">
          <span @click="themeStore.toggleTheme" class=" flex cursor-pointer text-orange-300 gap-x-1">
            <moon v-if="themeStore.theme === 'light'" class="h-6 w-6 text-orange-300 transime " />
            <sun v-else class="h-6 w-6 text-orange-300 transime" />
            تم {{ themeStore.theme === "dark" ? "لایت" : "دارک" }}
          </span>
        </div>
        <div class="inline-block mb-15">
          <a class="inline-flex gap-x-1 text-orange-300" href=" #">
            <shopingcard class="w-6 h-6 text-orange-300"  />
            سبد خرید
          </a>
        </div>
      </div>
    </div>
    <!-- sabad kharid hover -->
    <div v-if="shopinglist"
      class="fixed top-0  left-0 bottom-0 w-[75%] max-h-screen bg-white pt-3 px-4 dark:bg-zinc-700 flex flex-col">
      <div class="h-16 flex items-center justify-between border-b border-gray-300 dark:border-white/10">
        <xmark class="cursor-pointer w-6 h-6 dark:text-white" @click="ToggleShopingMobile" />
        <a href="#" class="font-danaDemiBold dark:text-white "> سبد خرید </a>
      </div>
      <div class="flex-grow overflow-y-auto scrollbar-custom  p-1 divide-y divide-gray-100 dark:divide-white/10">
        <div v-if="cartStore.cartItems.length" v-for="(product, index) in cartStore.cartItems" :key="index"
          class="flex mt-5 mb-5 gap-x-2.5 items-center justify-start h-[140px] w-[280px] gap-6">
          <div>
            <img :src="product.images" class="w-[80px] h-[80px]" alt="product1" />
          </div>
          <div class="flex flex-col w-[150px] overflow-hidden justify-between">
            <h4 class="font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2">
              {{ product.title }}
            </h4>
            <div class="flex gap-x-3">
              <div>
                <span class="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium tracking-tighter">
                  {{ product.discount }} تومان تخفیف
                </span>
                <div class="text-zinc-700 dark:text-white tracking-wider font-DanaMedium">
                  {{ product.price }}
                  <span class="font-Dana">تومان</span>
                </div>
              </div>
              <div class="gap-x-2 rounded-2xl h-[40px] bg-orange-300 justify-center text-white w-19 flex items-center">
                <button @click="cartStore.increaseQuantity(product.id)" class="text-xl cursor-pointer">+</button>
                <p class="w-[22px] text-center ">{{ product.quantity }} </p>
                <button @click="cartStore.decreaseQuantity(product.id)" class="text-xl cursor-pointer">-</button>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="flex flex-col items-center justify-center h-full text-center font-DanaMedium text-gray-500 dark:text-white">
          <p class="">محصولی برای نمایش وجود ندارد</p>
          <empty class="w-10 h-10 text-gray-600 dark:text-white" />
        </div>
      </div>
      <div class="h-16 bg-white dark:bg-zinc-700 absolute bottom-0 right-0 left-0 flex items-center justify-between px-4 border-t border-gray-300 dark:border-white/10">
        <div v-if="cartStore.cartItems.length > 0">
          <span class="text-zinc-700 dark:text-white tracking-wider font-DanaMedium">
            {{ cartStore.totalPrice }}
            <span class="font-Dana">تومان</span>
          </span>
        </div>
        <div v-if="cartStore.cartItems.length > 0">
          <a href="#"
            class="h-12 w-[120px] tracking-tightest flex items-center justify-center rounded-xl font-Dana bg-teal-600 dark:bg-emerald-500 dark:hover:bg-emerald-700 text-white hover:bg-teal-700 transition-colors">
            ثبت سفارش
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


