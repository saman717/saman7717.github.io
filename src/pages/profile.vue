<template>
    <div class="text-right min-h-screen bg-gray-800 flex items-center justify-center">
      <div class="bg-white shadow-lg rounded-lg p-8  flex flex-col items-center">
        <h1 class="text-2xl font-bold mb-6 text-center">ویرایش پروفایل</h1>
        <form @submit.prevent="updateUser" class="  gap-4 items-center justify-items-end">
          <!-- fild name -->
          <div class="m-6">
            <label for="name" class="block text-sm font-medium text-gray-700">نام:</label>
            <input
              type="text"
              id="name"
              v-model="localUser.name"
              placeholder="نام خود را وارد کنید"
              class="mt-1 block w-50 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <!-- fild email -->
          <div class="m-6">
            <label for="email" class="block text-sm font-medium text-gray-700">ایمیل:</label>
            <input
              disabled
              type="email"
              id="email"
              v-model="localUser.email"
              class="mt-1 block w-50 px-3 py-2 border text-gray-400/95 border-gray-300 rounded-md shadow-sm"
            />
          </div>
  
          <!-- fild joind date unavilalbe -->
          <div class="m-6">
            <label for="creationAt" class="block text-sm font-medium text-gray-700">تاریخ عضویت:</label>
            <input
              disabled
              type="text"
              id="creationAt"
              v-model="authStore.user.creationAt"
              class="mt-1 block w-50 px-3 py-2 border text-gray-400/95 border-gray-300 rounded-md shadow-sm"
            />
          </div>
  
          <div class="col-span-3 flex justify-center">
            <button
              type="submit"
              class="w-full mt-10 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              ذخیره تغییرات
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
 import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '../utils/axios';
import { useAuthStore } from '../store/auth';


const router = useRouter();
const authStore = useAuthStore();

const localUser = ref({
  name: '',
  email: ''
});


onMounted(() => {
  if (!authStore.token) {
    alert("لطفا ابتدا وارد حساب کاربری خود شوید.");
    router.push("/login");
  } else if (authStore.user) {
    // Create a copy of the current data
    localUser.value = { 
      name: authStore.user.name,
      email: authStore.user.email
    };
  }
});
const updateUser = async () => {
  try {
    if (!authStore.user || !authStore.user.id) {
      alert("شناسه کاربر یافت نشد!");
      return;
    }

    const response = await api.put(
      `/users/${authStore.user.id}`,
      {
        name: localUser.value.name,
        email: localUser.value.email,
      }
    );

    // Update the original value only after server confirmation:
    authStore.setUser(response.data, authStore.token);
    alert("اطلاعات با موفقیت بروزرسانی شد!");
  } catch (error) {
    console.error("خطا در بروزرسانی اطلاعات:", error);
    if (error.response) {
      alert(`خطا: ${error.response.status} - ${error.response.data.message || "مشکلی پیش آمده است!"}`);
    } else {
      alert("مشکلی پیش آمده است!");
    }
  }
};

  </script>
  
