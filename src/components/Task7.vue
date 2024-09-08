<template>
    <div class="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 class="font-roboto text-2xl font-bold text-center mb-4">Task 7: Teleport</h1>

      <h1 class="text-3xl font-bold mb-4">Vue 3 Teleport Example</h1>
  
      <button @click="openModal" class="font-bold bg-[#fcfcfc] text-[#14428B] border border-[#14428B] px-4 py-2 rounded-r hover:bg-[#14428B] hover:text-white transition duration-300">
        Open Modal
      </button>
  
      <!-- Modal will appear here using Teleport -->
      <Modal v-if="isModalOpen" @close="closeModal" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Modal from '@/components/Modal.vue';
  
  const isModalOpen = ref(false);
  
  const openModal = () => {
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
  };
  </script>
  