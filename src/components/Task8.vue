<template>
  <br>
  <h1 class="font-roboto text-2xl font-bold text-center mb-4">Task 1: Basic Component Creation</h1>

  <div class="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-10">
    <button @click="increment" class="font-bold bg-[#fcfcfc] text-[#14428B] border border-[#14428B] px-4 py-2 rounded-r hover:bg-[#14428B] hover:text-white transition duration-300">
      Increment
    </button>
    <p class="mt-4 text-lg font-semibold text-gray-700">{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>

<style scoped></style>