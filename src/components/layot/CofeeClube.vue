<script setup>
import club from '@/assets/images/img/club.png'
import Discovery from '@/assets/svg/Discovery.svg'
import Ticket from '@/assets/svg/Ticket-Star.svg'
import Activity from '@/assets/svg/Activity.svg'
import left from '@/assets/svg/chevron-left.svg'
</script>

<template>
    <div class="container lg:p-20 flex flex-col md:flex-row items-center h-69 justify-between  w-full md:h-36 bg-emerald-600 rounded-2xl mb-10 mt-15 p-4 pt-8 md:p-10">
        <!-- section right -->
        <div class="flex lg:w-[50%s] gap-x-1 lg:gap-x-5">
            <!-- image -->
            <div class=""> 
                <img :src="club" alt="" class="w-36 h-22 lg:w-28 lg:h-28 ">
            </div>
            <!-- text -->
             <div class="flex flex-col lg:gap-y-5 gap-y-1 text-white lg:mt-1.5  ">
                 <div>
                     <h2 class="text-2xl font-MorabbaBold lg:text-5xl ">کافی کلاب</h2>
                 </div>
                 <div>
                    <p class="font-MorabbaLight text-lg lg:text-xl tracking-wider">میدونستی میتونی با امتیاز هات قهوه بگیری؟</p>
                 </div>
             </div>
        </div>
        <!-- section left -->
        <div class="flex lg:w-[50%] gap-x-2 items-center justify-around ">
            <div class="flex items-center gap-x-2 lg:gap-x-4">
                <div class="bg-white relative w-17 h-19 lg:h-24 lg:w-23 rounded-2xl  text-emerald-600">
                    <Discovery class="w-10 h-10 absolute top-4 lg:top-5 right-0 left-0 m-auto"/>
                    <div class="absolute bottom-1 right-0 left-0 text-center">

                        <p class="text-xs  lg:text-sm font-DanaMedium">چرخ و بخت</p>
                    </div>
                </div>
                <div class="bg-white relative w-17 h-19 lg:h-24 lg:w-23 rounded-2xl  text-emerald-600">
                    <Activity class="w-10 h-10 absolute top-4 lg:top-5 right-0 left-0 m-auto"/>
                    <div class="absolute bottom-1 right-0 left-0 text-center">

                        <p class="text-xs  lg:text-sm font-DanaMedium">ماموریت ها</p>
                    </div>
                </div>
                <div class="bg-white relative w-17 h-19 lg:h-24 lg:w-23 rounded-2xl  text-emerald-600">
                    <Ticket class="w-10 h-10 absolute  top-4 lg:top-5 right-0 left-0 m-auto"/>
                    <div class="absolute bottom-1 right-0 left-0 text-center">

                        <p class="text-xs  lg:text-sm font-DanaMedium">جایزه ها</p>
                    </div>
                </div>


            </div>
            <div class="text-white font-DanaMedium flex flex-col  lg:gap-y-1 items-center">
                <div>
                    <p class="font-DanaMedium mr-4 text-lg lg:text-2xl">542</p>
                    <p class="font-MorabbaLight text-lg lg:tracking-wider">امتیـــــــاز شما </p>
                </div>
                <div>
                    <button class="lg:p-2 p-1  flex items-center justify-center gap-x-0.5 rounded-2xl lg:w-30 w-25 bg-orange-300 text-sm">
                        دریافت جایزه
                        <left class="w-4 h-4"/>
                    </button>
                </div>
                
            </div>
        </div>

    </div>
</template>