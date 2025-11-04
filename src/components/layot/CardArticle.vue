<script setup>
import menu from "@/assets/static/menu.json";
import { ref } from "vue";

const Articles = ref(menu.Article);

</script>

<template>

        <div class="flex flex-col md:flex-row items-center gap-y-2.5   m-auto  gap-x-2 container lg:p-20 justify-start ">
            <div v-for="(item, index) in Articles" :key="item.id"
                class="w-80 bg-white dark:bg-zinc-800 rounded-2xl p-4 border border-gray-200 dark:border-zinc-700 md:w-[247px] md:h-[307px] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102">
                <div class="">
                    <img :src="item.image" alt="" class="rounded-xl h-45 rounded-bl-4xl">
                </div>
                <div class="flex dark:text-white items-center justify-between mt-4">
                    <div class="w-[60%]">
                        <h3 class="font-DanaMedium text-sm">{{ item.title }}</h3>
                    </div>
                    <div class="w-10 text-green-600 ml-1">
                        <p class="text-center font-dana">{{ item.date }}</p>
                    </div>
                </div>

            </div>
        </div>




</template>