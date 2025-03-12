<template>
    <div>
      <h1>داشبورد</h1>
      <p v-if="user">خوش آمدی، {{ user.name }}!</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  const user = ref(null); 
  
  onMounted(() => {
    const token = localStorage.getItem("token");
    if (!token) {
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
  </script>
  