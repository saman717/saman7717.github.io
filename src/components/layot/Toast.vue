<template>
    <div class="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      <transition-group name="toast">
        <div 
          v-for="toast in toastStore.toasts" 
          :key="toast.id" 
          class="relative p-3 rounded-lg shadow-lg w-[270px] h-[75px] text-white font-DanaMedium flex items-center justify-center transition-all duration-500 overflow-hidden transform"
          :class="{
            'bg-green-600': toast.type === 'success',
            'bg-red-600': toast.type === 'error',
            'bg-blue-600': toast.type === 'info'
          }"
        >
        <p> {{ toast.message }}  </p>
        
  
          <!-- نوار پیشرفت -->
          <div class="absolute bottom-0 left-0 h-1 bg-white animate-progress"></div>
        </div>
      </transition-group>
    </div>
  </template>
  
  <script setup>
  import { useToastStore } from "@/store/toastStore";
  const toastStore = useToastStore();
  </script>
  
  <style scoped>
  /* انیمیشن نمایش نرم از پایین */
  .toast-enter-active,
  .toast-leave-active {
    transition: all 0.5s ease-in-out;
  }
  
  /* حالت ورود: از پایین بیاد */
  .toast-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  
  /* حالت نمایش */
  .toast-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* حالت خروج: به راست بره */
  .toast-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
  
  /* حالت خروج: محو بشه و به راست بره */
  .toast-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }
  
  /* نوار پیشرفت */
  @keyframes progress {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
  
  .animate-progress {
    width: 100%;
    animation: progress 3s linear forwards;
  }
  </style>
  