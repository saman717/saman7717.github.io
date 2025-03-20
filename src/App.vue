<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import Header from './components/layot/header.vue'; 

const route = useRoute();

// ایجاد متغیر برای نشان دادن یا مخفی کردن هدر
const showHeader = ref(route.meta.showHeader !== false);

// نظارت بر تغییرات مسیر و به‌روزرسانی متغیر showHeader
watch(() => route.path, () => {
  showHeader.value = route.meta.showHeader !== false;
});
</script>

<template>
  <div>
    <!-- نمایش هدر فقط در صورتی که meta showHeader برابر با true باشد -->
    <Header v-if="showHeader"/>
    <router-view />
  </div>
</template>
