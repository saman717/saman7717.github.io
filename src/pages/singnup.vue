<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
    <div class="max-w-md mx-auto p-6 bg-white  rounded-lg shadow-md mt-10">
    <h2 class="text-xl font-semibold text-center mb-4">ثبت‌نام - مرحله اول</h2>
    <form @submit.prevent="registerUser" class="space-y-4">
      <input 
        type="text" 
        v-model="name" 
        placeholder="نام" 
        required 
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <input 
        type="email" 
        v-model="email" 
        placeholder="ایمیل" 
        required 
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <input 
        type="password" 
        v-model="password" 
        placeholder="رمز عبور" 
        required 
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <input 
        type="password" 
        v-model="confirmPassword" 
        placeholder="تأیید رمز عبور" 
        required 
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <button 
        type="submit" 
        class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        ادامه
      </button>
    </form>
    <p v-if="errorMessage" class="text-red-500 text-center mt-2">{{ errorMessage }}</p>
  </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const router = useRouter();

const registerUser = async () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'رمز عبور و تأیید آن یکسان نیست!';
    return;
  }

  try {
    const response = await axios.post('https://api.escuelajs.co/api/v1/users/', {
      name: name.value,
      email: email.value,
      password: password.value,
      avatar: 'https://picsum.photos/800', // آواتار موقت
    });
      // Assume your API sends a JWT token
        const { token } = response.data; // This depends on the API response

    if (token) {
    // Store the token in local memory
      localStorage.setItem('jwtToken', token);
    }

    // Generate and save verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    console.log(`کد تأیید شما ${verificationCode}`);
    
    localStorage.setItem('verificationCode', verificationCode);
    localStorage.setItem('registeredEmail', email.value);

    router.push('/verify-email');
  } catch (error) {
    errorMessage.value = 'خطا در ثبت‌نام! لطفاً اطلاعات را بررسی کنید.';
    console.error(error.response?.data || error.message);
  }
};
</script>