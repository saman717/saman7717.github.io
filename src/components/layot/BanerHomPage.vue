<script>

</script>
<template>
    <div class="container flex flex-col md:flex-row items-center text-white gap-x-3 lg:p-20 gap-y-4 justify-between">
        <div class="relative w-full md:w-[50%] group shadow-2xl dark:shadow-white/20 rounded-lg">
            <div class="relative overflow-hidden shadow- rounded-lg">
                <img class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    src="@/assets/images/img/categoryRight.jpg" alt="">
                <!-- Overlay با گرادینت نرم -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <!-- سایه خارجی نرم -->
                <div
                    class="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_0_30px_rgba(255,255,255,0.1)]">
                </div>
            </div>

            <div class="absolute top-[30%] right-4  p-6 text-white">
                <h2 class="font-danaDemiBold text-3xl transition-all duration-300 group-hover:translate-y-[-5px]">
                    انواع قهوه
                </h2>
                <p class="font-DanaMedium text-xs mt-1">قهوه های درجه یک  بن مانو</p>
            </div>
        </div>

        <div class="relative w-full md:w-[50%] group shadow-2xl dark:shadow-white/20 rounded-lg">
            <div class="relative overflow-hidden rounded-lg">
                <img class="w-full h-full object-cover transition-all  duration-300 group-hover:scale-105 "
                    src="@/assets/images/img/categoryLeft.jpg" alt="">
                <!-- Overlay با گرادینت نرم -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent"></div>

                <!-- سایه خارجی نرم -->
                <div
                    class="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_0_30px_rgba(255,255,255,0.1)]">
                </div>
            </div>

            <div class="absolute top-[30%] right-4  p-6 text-white">
                <h2 class="font-danaDemiBold text-3xl transition-all duration-300 group-hover:translate-y-[-5px]">
                    پودرهای قهوه 
                </h2>
                <p class="font-DanaMedium text-xs mt-1">قهوه های درجه یک  بن مانو</p>
            </div>
        </div>

    </div>
</template>