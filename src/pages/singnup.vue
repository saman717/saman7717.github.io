<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">ثبت‌نام</h2>
  
        <!-- فرم ثبت‌نام -->
        <form @submit.prevent="handleSignup">
          <!-- فیلد نام -->
          <div class="mb-6">
            <label for="name" class="block text-sm font-medium text-gray-700">نام</label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="نام خود را وارد کنید"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
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
  
          <!-- فیلد تأیید رمز عبور -->
          <div class="mb-6">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">تأیید رمز عبور</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              placeholder="********"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          <!-- دکمه ثبت‌نام -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            ثبت‌نام
          </button>
        </form>
  
        <!-- لینک ورود به سیستم -->
        <div class="mt-6 text-center">
          <span class="text-sm text-gray-600">قبلاً حساب کاربری دارید؟</span>
          <RouterLink  to="/login" class="text-sm text-blue-600 hover:text-blue-500">ورود به سیستم</RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

import { RouterLink } from 'vue-router';

  
  </script>
  
