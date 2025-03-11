<template>
    <header class="bg-gray-50 shadow-sm">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- لوگو -->
          <div class="flex items-center">
            <img
              src="https://placehold.co/150x50"
              alt="Logo"
              class="h-8"
            />
          </div>
  
          <!-- منوی ناوبری -->
          <nav class="hidden md:flex space-x-8">
            <RouterLink to="/" class="text-gray-700 hover:text-blue-500">خانه</RouterLink>
            <RouterLink to="/aboutus" class="text-gray-700 hover:text-blue-500">درباره ما</RouterLink>
            <RouterLink to="/services" class="text-gray-700 hover:text-blue-500">خدمات</RouterLink>
            <RouterLink to="contactus" class="text-gray-700 hover:text-blue-500">تماس با ما</RouterLink>
          </nav>
  
          <!-- دکمه‌های فراخوانی -->
          <div class="flex items-center space-x-4">
            <RouterLink 
              to="/login"
              class="text-gray-700 hover:text-blue-500"
            >
              ورود
            </RouterLink>
            <RouterLink
              to="/signup"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              ثبت‌نام
            </RouterLink>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  /* استایل‌های سفارشی (اختیاری) */
  </style>