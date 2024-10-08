<script setup>
import { ref } from 'vue';
import { getCountryCode } from '@/utils/countryConverter'; 
const apiKey = import.meta.env.VITE_CARBON_API_KEY;


const countryInput = ref('');
const countryCode = ref('');
const electricityValue = ref(42);
const loading = ref(false);
const error = ref(null);
const users = ref([]);

const fetchCountryCode = () => {
  countryCode.value = getCountryCode(countryInput.value);
  if (!countryCode.value) {
    error.value = 'Invalid country name.';
    return;
  }
  error.value = null;
};

// Function to simulate the API call
const handleSubmit = async () => {
  fetchCountryCode();
  if (!countryCode.value) return;

  loading.value = true;

  const requestBody = {
    type: "electricity",
    electricity_unit: "kwh", 
    electricity_value: parseFloat(electricityValue.value),
    country: countryCode.value.toUpperCase(),
    state: countryCode.value === 'US' ? 'FL' : undefined
  };

  try {
    const response = await fetch('https://www.carboninterface.com/api/v1/estimates', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`, 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status}, ${errorText}`);
    }

    const data = await response.json();
    users.value = [
      `Carbon Emissions (g): ${data.data.attributes.carbon_g}`,
      `Carbon Emissions (kg): ${data.data.attributes.carbon_kg}`,
      `Carbon Emissions (lb): ${data.data.attributes.carbon_lb}`,
      `Carbon Emissions (tonnes): ${data.data.attributes.carbon_mt}`
    ];
  } catch (err) {
    error.value = `Error fetching data: ${err.message}`;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
    <h1 class="font-roboto text-2xl font-bold text-center mb-4">Task 4: API Integration</h1>

    <h1 class="text-2xl font-bold text-left mb-4">Carbon Estimator</h1>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      
      <!-- Country Name Input -->
      <div>
        <label for="country" class="block text-sm font-medium text-[#14428B]">Enter Country Name:</label>
        <input
          id="country"
          v-model="countryInput"
          class="mt-1 block w-full p-2 border border-[#14428b6d] shadow-sm focus:outline-none focus:ring-1"
          placeholder="North America & Europe countries"
        />
      </div>

      <!-- Electricity Value Input -->
      <div>
        <label for="electricityValue" class="block text-sm font-medium text-[#14428B]">Electricity Value (kWh):</label>
        <input
          id="electricityValue"
          type="number"
          v-model="electricityValue"
          min="1"
          class="mt-1 block w-full p-2 border border-[#14428b6d] shadow-sm focus:outline-none focus:ring-1"
        />
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="w-full font-bold bg-[#fcfcfc] text-[#14428B] border border-[#14428B] px-4 py-2 rounded-r hover:bg-[#14428B] hover:text-white transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>

    <!-- Error Message -->
    <p v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</p>

    <!-- Loading State -->
    <p v-if="loading" class="text-gray-600 text-sm mt-2">Loading...</p>

    <!-- Display Results -->
    <ul v-if="users.length > 0" class="mt-4 space-y-2">
      <li v-for="(user, index) in users" :key="index" class="bg-gray-100 p-2 rounded-md shadow-sm">
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
