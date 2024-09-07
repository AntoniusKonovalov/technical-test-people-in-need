<template>
    <!-- Teleport the modal to the body -->
    <teleport to="body">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 class="text-2xl font-bold mb-4">Modal Content</h2>
          <p class="mb-6">This is a modal rendered using Vue's teleport feature.</p>
          <button @click="emitClose" class="bg-red-500 text-white px-4 py-2 rounded-lg">
            Close Modal
          </button>
        </div>
      </div>
    </teleport>
  </template>
  
  <script setup>
  const emit = defineEmits(['close']);  
  
  const emitClose = () => {
    emit('close');  // Emit the "close" event to the parent component
  };
  </script>
  