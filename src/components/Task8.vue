<template>
    <div class="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <button @click="increment" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Increment
      </button>
      <p class="mt-4 text-lg font-semibold text-gray-700">{{ count }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        this.count++;
      }
    }
  };
  </script>
  
  <style scoped>
 
  </style>
  