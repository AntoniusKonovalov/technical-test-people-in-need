<script setup>
import { onMounted, ref } from 'vue';


const name = ref('People in Need');
const status = ref('active');
const users = ref([]);

const newUser = ref('');

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'inactive'
  } else if (status.value === 'inactive') {
    status.value = 'pending'
  } else {
    status.value = 'active'
  }
}

const addUser = () => {
  if (newUser.value.trim() !== '') {
    users.value.push(newUser.value);
    newUser.value = '';
  }
}

const removeUser = (index) => {
  users.value.splice(index, 1);
}

onMounted(async () => {
  try {
    const response = await fetch(
      'https://www.carboninterface.com/api/v1/estimates',
      {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ArU9mVHFrHIWeNDiC8BpCA',  // Replace YOUR_API_KEY with your actual API key
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: "electricity",
          electricity_unit: "kwh",       
          electricity_value: 42,         
          country: "us",                
          state: "fl"                   
        })
      }
    );

    const data = await response.json();
    console.log('Electricity Estimate API data:', data);

    // Use the API response in your application
    users.value = [
      `Carbon Emissions (g): ${data.data.attributes.carbon_g}`,
      `Carbon Emissions (kg): ${data.data.attributes.carbon_kg}`,
      `Carbon Emissions (lb): ${data.data.attributes.carbon_lb}`,
      `Carbon Emissions (tonnes): ${data.data.attributes.carbon_mt}`
    ];
  } catch (error) {
    console.error('Error fetching Electricity Estimate API data:', error);
  }
});

</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inactive</p>

  <form @submit.prevent="addUser">
    <label for="newUser">Add User:</label>
    <br />
    <input type="text" id="newUser" name="newUser" v-model="newUser">
    <br />
    <button type="submit">Submit</button>
  </form>

  <h3>users:</h3>
  <ul>
    <li v-for="(user, index) in users" :key="user">
      <span>
        {{ user }}
      </span>
      <button @click="removeUser(index)">x</button>
    </li>
  </ul>

  <br />

  <button @click="toggleStatus">Change Status</button>
</template>
