<template>
    <div class="text-right min-h-screen bg-gray-800 flex items-center justify-center">
      <div class="bg-white shadow-lg rounded-lg p-8 w-[90%] flex flex-col items-center">
        <h1 class="text-2xl font-bold mb-6 text-center">ویرایش پروفایل</h1>
        <form @submit.prevent="updateUser" class="grid grid-cols-3 w-[1000px] gap-4 items-center justify-items-end">
          <!-- فیلد نام -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">نام:</label>
            <input
              type="text"
              id="name"
              v-model="user.name"
              placeholder="نام خود را وارد کنید"
              class="mt-1 block w-50 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <!-- فیلد ایمیل -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">ایمیل:</label>
            <input
              disabled
              type="email"
              id="email"
              v-model="user.email"
              class="mt-1 block w-50 px-3 py-2 border text-gray-400/95 border-gray-300 rounded-md shadow-sm"
            />
          </div>
  
          <!-- فیلد تاریخ عضویت (غیرقابل ویرایش) -->
          <div>
            <label for="creationAt" class="block text-sm font-medium text-gray-700">تاریخ عضویت:</label>
            <input
              disabled
              type="text"
              id="creationAt"
              v-model="user.creationAt"
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
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = ref({});

onMounted(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("لطفا ابتدا وارد حساب کاربری خود شوید.");
    router.push("/login");
    return;
  }

  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    try {
      user.value = JSON.parse(storedUser);
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }
});

const updateUser = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("لطفا ابتدا وارد حساب کاربری خود شوید.");
      router.push("/login");
      return;
    }

    if (!user.value.id) {
      alert("شناسه کاربر یافت نشد!");
      return;
    }

    const response = await axios.put(
      `https://api.escuelajs.co/api/v1/users/${user.value.id}`,
      {
        name: user.value.name,
        email: user.value.email,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // ارسال توکن
        },
      }
    );

    alert("اطلاعات با موفقیت بروزرسانی شد!");
    localStorage.setItem("user", JSON.stringify(response.data));
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
