<template>
    <div class="container  flex flex-col gap-y-4 md:flex items-center text-white gap-x-3 lg:p-20 justify-between animate-pulse">
      <!-- اسکلت سمت راست -->
      <div class="relative w-[50%] h-[221px] group shadow-2xl dark:shadow-white/20">
        <div class="relative overflow-hidden rounded-lg">
          <!-- جایگزین تصویر با ابعاد دقیق -->
          <div class="w-full h-[221px] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          
          <!-- Overlay مشابه اصلی -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
  
          <!-- اسکلت متن با موقعیت دقیق -->
          <div class="absolute top-[30%] right-4 p-6 text-white space-y-2">
            <div class="h-8 bg-gray-400 dark:bg-gray-600 rounded-full w-48"></div>
            <div class="h-4 bg-gray-400 dark:bg-gray-600 rounded-full w-32"></div>
          </div>
        </div>
      </div>
  
      <!-- اسکلت سمت چپ -->
      <div class="relative w-[50%]  h-[221px] group shadow-2xl dark:shadow-white/20">
        <div class="relative overflow-hidden rounded-lg">
          <div class="w-full h-[221px] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
  
          <div class="absolute top-[30%] right-4 p-6 text-white space-y-2">
            <div class="h-8 bg-gray-400 dark:bg-gray-600 rounded-full w-48"></div>
            <div class="h-4 bg-gray-400 dark:bg-gray-600 rounded-full w-32"></div>
          </div>
        </div>
      </div>
    </div>
  </template>