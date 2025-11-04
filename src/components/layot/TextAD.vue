<script setup>
import contact from '@/assets/images/img/contact.png'
</script>

<template>
    <div class="dark:text-white h-[550px] text-zinc-700  lg:p-20 flex items-center gap-x-1">
        <div class="w-[30%]">
            <img :src="contact" class="w-[350px] h-[350px] object-cover" alt="">
        </div>
        <div class="flex flex-col gap-y-20 w-[60%]">
            <div class="">
                <h2 class="text-4xl font-danaDemiBold ">یکی از بهترن قهوه ها</h2>
                <p class="font-DanaMedium mt-5">این یک متن تستی است .</p>
            </div>
            <div>
                <p class="font-DanaMedium">این یک متن تستی است این یک متن تستی است این یک متن تستی است این یک متن تستی است این یک متن تستی است
                    این یک متن تستی است این یک متن تستیاین یک متن تستی است این یک متن تستی است  است این یک متن تستی است </p>
            </div>
            <div>
                <button class="border-2 rounded-2xl p-2 border-orange-300 text-orange-300 pr-4 m-auto">کلیک کنید</button>
            </div>
        </div>


    </div>
</template>