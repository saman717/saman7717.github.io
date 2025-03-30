<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const code = ref('');
const errorMessage = ref('');
const router = useRouter();
const timer = ref(60);
let countdown;

const startTimer = () => {
  countdown = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      clearInterval(countdown);
    }
  }, 1000);
};

const verifyCode = () => {
  const storedCode = localStorage.getItem('verificationCode');
  if (code.value === storedCode) {
    // Code is correct, redirect to dashboard
    alert('ایمیل شما تأیید شد!');

    // Get JWT token from local storage
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // Set the token in the request header for later use
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    router.push('/dashbord');
  } else {
    errorMessage.value = 'کد وارد شده نادرست است!';
  }
};

const resendCode = () => {
  const newCode = Math.floor(100000 + Math.random() * 900000);
  console.log(`کد تأیید جدید شما: ${newCode}`);
  localStorage.setItem('verificationCode', newCode);
  timer.value = 60;
  startTimer();
};

onMounted(() => {
  startTimer();
  const registeredEmail = localStorage.getItem('registeredEmail');
  if (!registeredEmail) {
    router.push('/signup'); // If the user enters the address directly, return to the registration page
  }

});
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
    <h2 class="text-xl font-semibold text-center mb-4">تأیید ایمیل</h2>
    <p class="text-center text-gray-600">لطفاً کد ارسال‌شده به ایمیل خود را وارد کنید.</p>
    <div class="flex justify-center my-4">
      <span class="text-red-500 font-semibold">{{ timer }} ثانیه</span>
    </div>
    <form @submit.prevent="verifyCode" class="space-y-4">
      <input type="text" v-model="code" placeholder="کد 6 رقمی" required
        class="w-full p-3 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-blue-500" />
      <button type="submit"
        class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300">
        تأیید
      </button>
    </form>
    <button @click="resendCode" :disabled="timer > 0"
      class="w-full mt-4 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300 disabled:opacity-50">
      ارسال مجدد کد
    </button>
    <p v-if="errorMessage" class="text-red-500 text-center mt-2">{{ errorMessage }}</p>
  </div>
</template>
