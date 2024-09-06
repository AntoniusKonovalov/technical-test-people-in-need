<script>
  export default {
    data() {
      return {
        name: "People in Need",
        status: 'active',
        tasks: ['task one', 'task two', 'task three'],
        link: 'https://www.peopleinneed.net/career#offers&czech-republic-1-job-locations&unspecified-remote-work-3-job-locations'
      }
    }   ,
    methods: {
      toggleStatus() {
        if(this.status==='active') {
          this.status = 'inactive'
        } else if (this.status === 'inactive' ) {
          this.status = 'pending'
        } else {
          this.status = 'active'
        }
        
      }
    }
  }
</script>

<template>
  <h1>{{name}}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">Click for People in Need</a> -->
  <a :href="link">Click for People in Need</a>
  <br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>


