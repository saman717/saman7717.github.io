<script setup>
import { useCartStore } from "@/store/cartStore";
import xmark from '@/assets/svg/mark.svg';
import empty from '@/assets/svg/empty.svg';

const cartStore = useCartStore();
console.log(cartStore.cartItems);
</script>

<template>
    <div class="mt-20 container  dark:text-white">
        <div
            class=" bg-zinc-700  relative h-[550px] text-white dark:bg-white m-5 p-5 rounded-2xl border-t-[5px] dark:text-zinc-700 border-t-orange-300">

            <div>
                <div
                    class="hidden md:flex items-center justify-between bg-orange-300 h-12 p-5 font-danaDemiBold rounded-full shadow-xl ">
                    <div class="w-[279px] text-center">محصول</div>
                    <div class="w-[279px] text-center">قیمت</div>
                    <div class="w-[279px] text-center">تعداد</div>
                    <div class="w-[279px] text-center">مجموع</div>
                </div>
            </div>

            <div class=" overflow-auto max-h-[400px] scrollbarcard">
                <div v-if="cartStore.cartItems.length === 0"
                    class="flex flex-col font-DanaMedium items-center justify-center mt-10">
                    <empty class="w-[250px] h-[250px]" />
                    سبد شما خالی است
                    <router-link to="/shop" class="text-blue-600">افزودن محصول</router-link>

                </div>
                <!-- لیست محصولات -->
                <div v-else class="space-y-4 mt-8 text-center flex flex-col  h-full  ">
                    <div v-for="(product, index) in cartStore.cartItems" :key="index"
                        class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-orange-300  rounded-xl shadow-lg bg-zinc-700 dark:bg-white text-white dark:text-zinc-700 ">
                        <!-- تصویر و عنوان -->
                        <div class="flex   items-center gap-3 w-full md:w-1/4">
                            <div class="flex relative  items-center gap-3 w-full md:w-1/4">
                                <img :src="product.images" alt="product image"
                                    class="absolute w-14 h-14 object-cover rounded-md" />

                                <xmark @click="cartStore.removeFromCart(product.id)"
                                    class="relative -top-7 hover:scale-120 hover:bg-zinc-300  -right-5 text-red-600 bg-white rounded-full cursor-pointer transition-all ease-in-out" />
                            </div>
                            <h2 class="line-clamp-1 text-sm font-medium max-w-[150px] ">{{ product.title }}</h2>
                        </div>

                        <!-- جزئیات فقط در موبایل به صورت ستونی -->
                        <div class="flex flex-col gap-2 w-full md:hidden text-sm   mt-4">
                            <p><span class="font-DanaMedium">قیمت:</span> {{ product.price.toLocaleString() }} تومان</p>
                            <div class="flex items-center gap-2 font-DanaMedium">
                                <span class="font-DanaMedium">تعداد:</span>
                                <button @click="cartStore.increaseQuantity(product.id)"
                                    class="cursor-pointer px-2 font-DanaMedium py-1 bg-orange-300 rounded hover:bg-gray-300">+</button>
                                <span>{{ product.quantity }}</span>
                                <button @click="cartStore.decreaseQuantity(product.id)"
                                    class=" cursor-pointer px-2 py-1 bg-orange-300 rounded hover:bg-gray-300">−</button>
                            </div>
                            <p><span class="font-semibold">مجموع:</span> {{ (product.price *
                                product.quantity).toLocaleString() }} تومان</p>
                        </div>

                        <!-- نسخه دسکتاپ -->
                        <div class="hidden md:block w-full md:w-1/4 text-center font-DanaMedium     ">
                            {{ product.price.toLocaleString() }} تومان
                        </div>

                        <div class="hidden md:flex w-full md:w-1/4  justify-center font-DanaMedium items-center gap-2">
                            <button @click="cartStore.increaseQuantity(product.id)"
                                class=" cursor-pointer px-2 py-1 bg-orange-300 rounded hover:bg-gray-300">+</button>
                            <span class="w-[18px]">{{ product.quantity }}</span>
                            <button @click="cartStore.decreaseQuantity(product.id)"
                                class="cursor-pointer flex items-center px-2 py-1 bg-orange-300 rounded hover:bg-gray-300">−</button>
                        </div>

                        <div class="hidden md:block w-full md:w-1/4 text-center font-DanaMedium ">
                            {{ (product.price * product.quantity).toLocaleString() }} تومان
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="cartStore.cartItems.length > 0"
                class=" flex items-center justify-between absolute bottom-0 right-0 left-0 w-full rounded-sm p-3 bg-orange-300 ">
                <div
                    class="mr-5 text-white bg-green-600 p-2 pr-3 pl-3 hover:bg-green-700 cursor-pointer font-DanaMedium transition-all rounded-2xl">
                    ثبت سفارش </div>
                <div class="ml-5 bg-white p-2 pr-6  pl-6 rounded-2xl text-zinc-700 font-DanaMedium "> جمع کل : <span
                        class="text-red-600">{{ cartStore.totalPrice }}</span> </div>
            </div>
        </div>
    </div>

</template>



<style></style>