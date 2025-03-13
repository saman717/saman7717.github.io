<template>
    <div class="max-w-sm w-full hover:scale-110  rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all ms-1.5 duration-300 bg-white flex flex-col">
      <div class="relative">
        <img
          class="w-full h-48 object-cover "
          :src="product.images"
          alt="محصول"
        />
        <span v-if="product.discount" class="absolute top-2 right-2 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
          {{ product.discount }}
        </span>
      </div>
  
      <div class="p-4 flex flex-col flex-grow ">
        <h3 class=" line-clamp-1 text-lg font-semibold text-gray-800 mb-2">
            <a href="#"> {{ product.title }}</a>
          
        </h3>
  
        <p class="text-gray-600 text-sm mb-4 line-clamp-2">
          {{ product.description }}
        </p>
  
        <div class="mt-auto flex items-center justify-between">
          <div class="text-lg font-bold text-gray-900">
            <span>{{ product.price }}$</span>
          </div>
  
          <button 
            class="bg-blue-500 text-sm hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            @click="addToCart"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    setup(props, { emit }) {
      const addToCart = () => {
        emit('add-to-cart', props.product);
      };
  
      return {
        addToCart,
      };
    },
  };
  </script>