<template>
  <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
    
    <!-- Original Component Section -->
    <h2 class="text-2xl font-bold text-black mb-4">Original Component (Options API)</h2>
    <div class="bg-gray-100 p-4 rounded-md overflow-auto">
      <prism language="markup">
        {{ originalCode }}
      </prism>
    </div>

    <!-- Refactored Component Section -->
    <h2 class="text-2xl font-bold text-black mt-6 mb-4">Refactored Component (Composition API)</h2>
    <div class="bg-gray-100 p-4 rounded-md overflow-auto">
      <prism language="markup">
        {{ refactoredCode }}
      </prism>
    </div>
  </div>
</template>

<script setup>
import Prism from 'vue-prism-component';
import 'prismjs/themes/prism.css'; 

const originalCode = `
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue 3!'
    };
  }
};
</scriрt>
`;

const refactoredCode = `
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello, Vue 3!');
</scriрt>
`;
</script>

<style scoped>
h2 {
  margin-bottom: 16px;
  margin-top: 24px;
}
</style>
