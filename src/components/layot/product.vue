<script setup>
import cardproduct from './cardproduct.vue';
import chevronLeft from '@/assets/svg/chevron-left.svg'

defineProps({
    products: Array, // Retrieve product data from the parent component
});

</script>


<template>
    <div class="product mt-15 ">
        <div class="container  lg:p-20">
            <div class="mb-5">
                <h2 class="font-MorabbaBold text-black dark:text-white text-3xl ">جدیدترین محصولات</h2>
                <div class="flex items-center justify-between mt-2 ">
                    <p class="font-MorabbaLight text-black dark:text-white text-[12px] ">فرآوری شده از دانه قهوه</p>
                    <div class="flex items-center justify-center">
                        <router-link
                            class="font-dana flex items-center justify-center  text-orange-300 md:font-danaDemiBold md:text-xl">
                            مشاهده همه محصولات
                            <chevronLeft class="w-6 h-6" strock="2" />
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-y-4   lg:grid-cols-4 ">
                <cardproduct v-for="(product, index) in products.slice(10, 18)" :key="index" :product="product" />
            </div>
        </div>
    </div>
</template>
