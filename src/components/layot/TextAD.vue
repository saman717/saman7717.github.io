<script setup>
import contact from "@/assets/images/img/contact.png";
</script>

<template>
  <section
    class="dark:text-white text-zinc-700 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 py-12 lg:py-20"
  >
    <!-- تصویر -->
    <div class="w-full lg:w-1/3 flex justify-center">
      <img
        :src="contact"
        alt="contact"
        class="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] object-cover rounded-xl shadow-md"
      />
    </div>

    <!-- متن -->
    <div class="w-full lg:w-2/3 flex flex-col items-center lg:items-start gap-8 text-center lg:text-right">
      <div>
        <h2 class="text-3xl sm:text-4xl font-danaDemiBold mb-4">
          یکی از بهترین قهوه‌ها
        </h2>
        <p class="font-DanaMedium text-base sm:text-lg leading-relaxed">
          این یک متن تستی است.
        </p>
      </div>

      <div>
        <p class="font-DanaMedium text-sm sm:text-base leading-7">
          این یک متن تستی است این یک متن تستی است این یک متن تستی است این یک
          متن تستی است این یک متن تستی است این یک متن تستی است این یک متن تستی
          است این یک متن تستی است این یک متن تستی است این یک متن تستی است.
        </p>
      </div>

      <button
        class="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 rounded-2xl px-6 py-2 text-sm sm:text-base font-DanaMedium"
      >
        کلیک کنید
      </button>
    </div>
  </section>
</template>
