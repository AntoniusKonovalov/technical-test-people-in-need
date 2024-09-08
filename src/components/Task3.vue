<script setup>
import { ref } from 'vue';

// Form state
const name = ref('');
const email = ref('');
const password = ref('');

// Error state for each field
const nameError = ref('');
const emailError = ref('');
const passwordError = ref('');

// Validate form on submission
const validateForm = () => {
  let valid = true;

  // Name validation
  if (!name.value.trim()) {
    nameError.value = 'Name is required.';
    valid = false;
  } else {
    nameError.value = '';
  }

  // Email validation (simple regex for email format)
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.value.trim()) {
    emailError.value = 'Email is required.';
    valid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.value = 'Please enter a valid email address.';
    valid = false;
  } else {
    emailError.value = '';
  }

  // Password validation (minimum 6 characters)
  if (!password.value.trim()) {
    passwordError.value = 'Password is required.';
    valid = false;
  } else if (password.value.length < 6) {
    passwordError.value = 'Password must be at least 6 characters long.';
    valid = false;
  } else {
    passwordError.value = '';
  }

  return valid;
};

// Handle form submission
const handleSubmit = () => {
  if (validateForm()) {
    alert('Form submitted successfully!');

  }
};
</script>

<template>
  <div class="max-w-md mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Task 3: Form Handling</h1>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">

      <!-- Name Field -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Name</label>
        <input 
          v-model="name" 
          type="text" 
          class="block w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter your name"
        />
        <p v-if="nameError" class="text-red-500 text-sm mt-1">{{ nameError }}</p>
      </div>

      <!-- Email Field -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input 
          v-model="email" 
          type="email" 
          class="block w-full p-2 border border-gray-300 "
          placeholder="Enter your email"
        />
        <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
      </div>

      <!-- Password Field -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Password</label>
        <input 
          v-model="password" 
          type="password" 
          class="block w-full p-2 border border-gray-300"
          placeholder="Enter your password"
        />
        <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
      </div>

      <!-- Submit Button -->
      <button 
        type="submit" 
        class="w-full font-bold bg-[#fcfcfc] text-[#14428B] border border-[#14428B] px-4 py-2 rounded-r hover:bg-[#14428B] hover:text-white transition duration-300">
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
</style>
