<script setup>
import { ref } from 'vue';

// State to hold the items and the new item input
const items = ref([]);
const newItem = ref('');

// Function to add the new item to the list
const addItem = () => {
  if (newItem.value.trim() !== '') {
    items.value.push(newItem.value);
    newItem.value = '';  
  }
};

// Function to delete an item from the list
const deleteItem = (index) => {
  items.value.splice(index, 1);
};

// Function to check if the items array is empty
const hasItems = () => {
  return items.value.length > 0;
};
</script>

<template>
  <div class="max-w-lg mx-auto p-6">
    <h1 class="font-roboto text-2xl font-bold text-center mb-4">Task 1: Basic Component Creation</h1>
    
    <!-- Input Form -->
    <form @submit.prevent="addItem" class="flex items-center mb-4">
      <input 
        v-model="newItem" 
        type="text" 
        placeholder="Add an item" 
        class="border border-[#14428B] p-2 flex-grow  focus:outline-none focus:ring-1"
      />
      <button 
        type="submit" 
        class="font-bold bg-[#fcfcfc] text-[#14428B] border border-[#14428B] px-4 py-2 rounded-r hover:bg-[#14428B] hover:text-white transition duration-300">
        Add Item
      </button>
    </form>

    <!-- List Display -->
    <ul v-if="hasItems()" class="list-disc pl-5 space-y-2">
      <li v-for="(item, index) in items" :key="index" class="flex justify-between items-center text-lg">
        <span>{{ item }}</span>
        <button 
          @click="deleteItem(index)" 
          class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition duration-300">
          Delete
        </button>
      </li>
    </ul>

    <p v-else class="text-red-500 text-center">No items available.</p>
  </div>
</template>

<style scoped>
</style>
