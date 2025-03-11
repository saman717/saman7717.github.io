<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">ورود به حساب کاربری</h2>
  
        <!-- فرم لاگین -->
        <form @submit.prevent="handleLogin">
          <!-- فیلد ایمیل -->
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
  
          <!-- فیلد رمز عبور -->
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
  
          <!-- دکمه ورود -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            ورود
          </button>
        </form>
  
        <!-- لینک‌های فراموشی رمز عبور و ثبت‌نام -->
        <div class="mt-6 text-center">
          <a href="#" class="text-sm text-blue-600 hover:text-blue-500">فراموشی رمز عبور</a>
          <span class="mx-2 text-gray-400">|</span>
          <RouterLink to="/signup" class="text-sm text-blue-600 hover:text-blue-500">ثبت‌نام</RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

import { RouterLink } from 'vue-router';

  </script>
  
 