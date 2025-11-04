<template>
  <!-- استفاده از grid برای مرکزیت دادن کارت -->
  <div class="grid place-items-center container  mt-30">
    <div class="md:w-[270px] md:h-[430px] w-[150px] h-[347px] bg-zinc-700/30 dark:bg-white/10 rounded-2xl shadow-[0_5px_10px_rgba(55,65,81,0.2)] animate-pulse">
      <!-- بخش بالایی: تصویر -->
      <div class="rounded-t-2xl w-full h-[200px] md:h-[250px] bg-gray-400/20 dark:bg-gray-300/20"></div>

      <!-- عنوان محصول -->
      <div class="p-2 mt-0.5 pt-2">
        <div class="h-6 md:h-[28px] bg-gray-400/30 dark:bg-gray-300/20 rounded w-1/4"></div>
      </div>

      <!-- قیمت محصول -->
      <div class="p-2 pt-1">
        <div class="h-5 bg-green-500/20 dark:bg-green-800/20 rounded w-1/2"></div>
      </div>

      <!-- بخش دکمه‌ها و ستاره‌ها -->
      <div class="flex justify-between mt-3 mb-2 items-center gap-x-0 px-2">
        <div class="flex gap-x-2">
          <div class="w-[12px] md:w-[34px] h-[12px] md:h-[34px] bg-gray-400/30 dark:bg-gray-300/20 rounded-full"></div>
          <div class="w-[12px] md:w-[34px] h-[12px] md:h-[34px] bg-gray-400/30 dark:bg-gray-300/20 rounded-full"></div>
        </div>
        <div class="flex ">
          <div v-for="i in 5" :key="i" class="w-4 h-4 bg-gray-400/30 dark:bg-gray-300/20 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonProductCard"
}
</script>
