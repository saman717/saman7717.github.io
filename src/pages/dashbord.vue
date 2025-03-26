<template >
  <div class="min-h-screen flex bg-gray-100">
    <!-- Sidebar -->
    <div class="w-64 bg-blue-800 text-white">
      <div class="p-6 border-b border-blue-700">
        <h2 class="text-xl font-bold">پنل کاربری</h2>
      </div>
      
      <nav class="p-4">
        <router-link 
          to="/" 
          class="flex items-center p-3 mb-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span class="ml-2">🏠</span>
          <span>صفحه اصلی</span>
        </router-link>
        
        <router-link 
          to="/profile" 
          class="flex items-center p-3 mb-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span class="ml-2">👤</span>
          <span>پروفایل</span>
        </router-link>
        
        <router-link 
          to="/settings" 
          class="flex items-center p-3 mb-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span class="ml-2">⚙️</span>
          <span>تنظیمات</span>
        </router-link>
        
        <button 
          @click="logout" 
          class="w-full flex items-center p-3 mt-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span class="ml-2">🚪</span>
          <span>خروج</span>
        </button>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <!-- Header -->
      <div class="bg-white p-6 rounded-lg shadow-md mb-8 flex justify-center items-center ">
        <div class="w-30 h-30 ml-7 flex items-center ">

          <div class="flex flex-col justify-center items-center">
            <img class="rounded-full h-25" :src="AuthStore.user?.avatar" alt="">
            <h1 class="text-lg  font-bold ">{{ AuthStore.user?.name || "کاربر" }}  </h1>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold text-gray-700">سفارشات فعال</h3>
          <p class="text-2xl font-bold mt-2">۱۵ مورد</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold text-gray-700">موجودی حساب</h3>
          <p class="text-2xl font-bold mt-2">۱۲,۵۰۰,۰۰۰ تومان</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold text-gray-700">اعلان‌ها</h3>
          <p class="text-2xl font-bold mt-2">۳ مورد جدید</p>
        </div>
      </div>

      <!-- Chart Section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">وضعیت سفارشات</h3>
        <div class="flex items-end h-40 gap-2">
          <div class="w-1/4 bg-blue-200 rounded-t-lg" style="height: 60%"></div>
          <div class="w-1/4 bg-blue-400 rounded-t-lg" style="height: 80%"></div>
          <div class="w-1/4 bg-blue-600 rounded-t-lg" style="height: 45%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth"; 

const router = useRouter();
const user = ref({}); 
const AuthStore = useAuthStore()


onMounted(() => {
  if(!AuthStore.token){
    router.push("/login")
  }
  
});

const logout = () => {
  AuthStore.logout();
  router.push("/login");
};
console.log(user);
</script>
