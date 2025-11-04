<template>
  <div class="w-full">
    <div class="w-full h-full bg-zinc-700/30 dark:bg-white/10 rounded-2xl shadow-[0_5px_10px_rgba(55,65,81,0.2)] animate-pulse">
      <!-- تصویر -->
      <div class="rounded-t-2xl w-full aspect-[5/3] bg-gray-400/20 dark:bg-gray-300/20"></div>

      <!-- عنوان -->
      <div class="p-2 mt-2">
        <div class="h-6 md:h-7 bg-gray-400/30 dark:bg-gray-300/20 rounded w-1/2"></div>
      </div>

      <!-- قیمت -->
      <div class="p-2 pt-1">
        <div class="h-5 bg-green-500/20 dark:bg-green-800/20 rounded w-1/3"></div>
      </div>

      <!-- دکمه‌ها و ستاره‌ها -->
      <div class="flex justify-between mt-3 mb-2 items-center px-2">
        <div class="flex gap-2">
          <div class="w-8 h-8 md:w-10 md:h-10 bg-gray-400/30 dark:bg-gray-300/20 rounded-full"></div>
          <div class="w-8 h-8 md:w-10 md:h-10 bg-gray-400/30 dark:bg-gray-300/20 rounded-full"></div>
        </div>
        <div class="flex gap-1">
          <div v-for="i in 5" :key="i" class="w-4 h-4 bg-gray-400/30 dark:bg-gray-300/20 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonProductCard",
};
</script>
