<script setup>
import menu from "@/assets/static/menu.json";
import { ref } from 'vue'

const category = ref(menu.category);

</script>

<template>
    <div class="container lg:p-20 flex flex-col gap-y-8  mt-24 md:mt-10 md:flex-row items-center md:justify-between">
        <div v-for="(item, index) in category" :key="item.id" class="flex group  flex-col items-center justify-center">
            <div class=" rounded-full w-[150px] transition-all  duration-300 group-hover:scale-105 h-[150px]">
                <img :src="item.image" class="w-full h-full object-cover scale-110" alt="" />
            </div>
            <router-link  class="font-DanaMedium mt-2 dark:text-white"> {{ item.title }}</router-link>
        </div>
        
        
    </div>
</template>