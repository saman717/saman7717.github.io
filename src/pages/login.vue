<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">ورود به حساب کاربری</h2>
  

        <form @submit.prevent="loginUser">

          <div class="mb-6">
            <label for="email" class="block text-sm font-medium text-gray-700">ایمیل</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="example@example.com"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  

          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">رمز عبور</label>
            <input
            
              type="password"
              id="password"
              v-model="password"
              placeholder="********"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            ورود
          </button>
        </form>
  

        <div class="mt-6 text-center">
          <a href="#" class="text-sm text-blue-600 hover:text-blue-500">فراموشی رمز عبور</a>
          <span class="mx-2 text-gray-400">|</span>
          <RouterLink to="/signup" class="text-sm text-blue-600 hover:text-blue-500">ثبت‌نام</RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useAuthStore } from "../store/auth"; // مسیر استور
  import { useRouter } from "vue-router";
  import api from "../utils/axios"; // استفاده از api که خودتان ساختید
  
  const email = ref("");
  const password = ref("");
  const authStore = useAuthStore();
  const router = useRouter();
  
  const loginUser = async () => {
    try {
      // درخواست ورود به سیستم
      const response = await api.post("/auth/login", {
        email: email.value,
        password: password.value,
      });
  
      const { access_token } = response.data;
  
      if (!access_token) {
        alert("ورود ناموفق. لطفاً اطلاعات خود را بررسی کنید.");
        return;
      }
  
      // درخواست برای اطلاعات پروفایل کاربر
      const userResponse = await api.get("/auth/profile", {
        headers: { Authorization: `Bearer ${access_token}` },
      });
  
      // ذخیره اطلاعات کاربر و توکن در استور
      authStore.setUser(userResponse.data, access_token);
      localStorage.setItem("token", access_token); // ذخیره توکن در localStorage
  
      // هدایت به داشبورد
      router.push("/dashbord");
    } catch (err) {
      console.error(err);
      alert("خطا در ورود. لطفاً دوباره تلاش کنید.");
    }
  };
  </script>