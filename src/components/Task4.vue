<script setup>
import { ref } from 'vue';
import { getCountryCode } from '@/utils/countryConverter'; 

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
        'Authorization': 'Bearer ArU9mVHFrHIWeNDiC8BpCA', 
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
    <h1 class="text-2xl font-bold text-center mb-4 text-blue-700">Carbon Estimator</h1>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      
      <!-- Country Name Input -->
      <div>
        <label for="country" class="block text-sm font-medium text-gray-700">Enter Country Name:</label>
        <input
          id="country"
          v-model="countryInput"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="North America & Europe countries"
        />
      </div>

      <!-- Electricity Value Input -->
      <div>
        <label for="electricityValue" class="block text-sm font-medium text-gray-700">Electricity Value (kWh):</label>
        <input
          id="electricityValue"
          type="number"
          v-model="electricityValue"
          min="1"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition duration-300"
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
/* Additional styles, if needed */
</style>
