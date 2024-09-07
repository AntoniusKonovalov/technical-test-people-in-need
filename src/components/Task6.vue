<template>
    <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 class="text-3xl font-bold mb-4">Custom Directive: Toggle Background Color</h1>
      
      <!-- Element with the custom directive -->
      <div v-toggle-color class="p-6 text-white text-center rounded-lg shadow-md cursor-pointer">
        Click me to change my background color!
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, getCurrentInstance } from 'vue';
  
  const isBlue = ref(true);
  
  // Custom directive definition
  const toggleColorDirective = {
    mounted(el) {
      el.style.backgroundColor = '#3B82F6'; // Tailwind's bg-blue-500 equivalent
      el.addEventListener('click', () => {
        el.style.backgroundColor = isBlue.value ? '#EF4444' : '#3B82F6'; // Toggle between blue-500 and red-500
        isBlue.value = !isBlue.value;
      });
    },
  };
  
  // Register the directive within the component
  const instance = getCurrentInstance();
  instance.appContext.app.directive('toggle-color', toggleColorDirective);
  </script>
  
  <style scoped>
  /* Adding transition for smooth background color change */
  div[v-toggle-color] {
    transition: background-color 0.3s ease-in-out;
  }
  </style>
  