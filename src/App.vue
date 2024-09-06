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
      'https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=8b06e5ff843c97b0ee5c468238894f26',
      {
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        // }
      }
    )
    const data = await response.json();
    console.log('API data:', data);

  } catch (error) {
    console.error('Error fetching API data:', error);
  }
})

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
