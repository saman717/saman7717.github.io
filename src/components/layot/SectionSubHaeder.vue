<script setup>
import curve from "@/assets/svg/curve.svg"
import chavronDown from "@/assets/svg/chavronDown.svg"
</script>

<template>
    <section class="home relative  ">
        <div
            class="container h-[300px] md:h-full relative  overflow-y-hidden flex justify-end  items-center mt-10 md:mt-0   md:min-h-screen ">
            <div class="text-white -mt-20 md:mt-0" >
                <h2 class="font-MorabbaBold text-2xl md:text-6xl mb-0.5 md:mb-2">قهوه عربیکا تانزانی
                </h2>
                <span class="font-MorabbaLight text-xl md:text-5xl ">یک فنجان بالانس</span>
                <span class="block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8 "></span>
                <p class="max-w-[201px] font-MorabbaLight md:max-w-[460px] text-xs md:text-2xl "> قطعا نام آشنای عربکا
                    را شنیده اید، عربیکا یکی از گونه های قهوه ایت که در نواحی مختلف کمربند قهوه کشت می شود</p>
            </div>
            <div
                class="circle absolute top-0 left-0 right-0  -bottom-85 md:-bottom-7533333333333333333333333333  md:translate-y-full translate-y-0 m-auto circle--lg">
                <div class="circle circle--md">
                    <div class="circle circle--sm hidden md:block   "> </div>
                </div>
            </div>
        </div>
        <curve class="absolute -bottom-1 md:bottom-0 right-0 left-0 m-auto text-white dark:text-zinc-700" />
        <div
            class=" absolute bottom-0 right-0 left-0 m-auto w-[30px] h-[30px] translate-y-3.5  rounded-full border-2 flex items-center justify-center border-orange-300">
            <chavronDown class="text-zinc-700 dark:text-white w-4 h-4" />
        </div>
    </section>
</template>

