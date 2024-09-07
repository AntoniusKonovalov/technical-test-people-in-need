<script setup>
import { ref } from 'vue';

// State to hold the items and the new item input
const items = ref([]);
const newItem = ref('');

// Function to add the new item to the list
const addItem = () => {
  if (newItem.value.trim() !== '') {
    items.value.push(newItem.value);
    newItem.value = '';  // Clear the input
  }
};

// Function to check if the items array is empty
const hasItems = () => {
  return items.value.length > 0;
};
</script>

<template>
  <div class="max-w-lg mx-auto p-6">
    <h1 class="text-2xl font-bold text-center mb-4">Task 1: Item List</h1>
    
    <!-- Input Form -->
    <form @submit.prevent="addItem" class="flex items-center justify-between mb-4">
      <input 
        v-model="newItem" 
        type="text" 
        placeholder="text1, text2, text3" 
        class="border border-gray-300 p-2 w-full rounded-l"
      />
      <button 
        type="submit" 
        class="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition duration-300">
        Add Item
      </button>
    </form>

    <!-- List Display -->
    <ul v-if="hasItems()" class="list-disc pl-5 space-y-2">
      <li v-for="(item, index) in items" :key="index" class="text-lg">
        {{ item }}
      </li>
    </ul>

    <p v-else class="text-red-500 text-center">No items available.</p>
  </div>
</template>

<style scoped>
/* Additional styles can go here */
</style>
