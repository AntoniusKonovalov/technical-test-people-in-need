<script setup>
import { ref } from 'vue';
import { getCountryCode } from './utils/countryConverter'; 

const countryInput = ref('');
const countryCode = ref('');
const electricityValue = ref(42);
const loading = ref(false);
const error = ref(null);
const users = ref([]);

const fetchCountryCode = () => {
  countryCode.value = getCountryCode(countryInput.value);
  console.log('Country code:', countryCode.value);
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
    electricity_unit: "kwh", // You can change to "mwh" if necessary
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
      console.log(`API Error: ${response.status}, ${errorText}`);
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
  <h1>Carbon Estimator</h1>

  <form @submit.prevent="handleSubmit">
    <label for="country">Enter Country Name:</label>
    <input id="country" v-model="countryInput" placeholder="N' America & Europe countries" />

    <label for="electricityValue">Electricity Value (kWh):</label>
    <input id="electricityValue" v-model="electricityValue" type="number" min="1" />

    <button type="submit">Submit</button>
  </form>

  <p v-if="error">{{ error }}</p>
  <p v-if="loading">Loading...</p>

  <ul v-if="users.length > 0">
    <li v-for="(user, index) in users" :key="index">{{ user }}</li>
  </ul>
</template>

<style scoped>
form {
  margin-bottom: 20px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f0f0f0;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
}
</style>
