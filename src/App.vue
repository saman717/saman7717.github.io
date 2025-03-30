<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import Header from './components/layot/header.vue'; 

const route = useRoute();
const showHeader = ref(route.meta.showHeader !== false); // Create a variable to show or hide the header

// Watch for route changes and update the `showHeader` variable
watch(() => route.path, () => {
  showHeader.value = route.meta.showHeader !== false;
});
</script>


<template>
  <div class="dark:bg-zinc-700">
    <!-- نمایش هدر فقط در صورتی که meta showHeader برابر با true باشد -->
    <Header v-if="showHeader"/>
    <router-view />
  </div>
</template>
