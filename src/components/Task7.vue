<template>
    <div class="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 class="text-3xl font-bold mb-4">Vue 3 Teleport Example</h1>
  
      <button @click="openModal" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
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
  