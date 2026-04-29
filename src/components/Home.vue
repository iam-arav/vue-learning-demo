<script setup>
import { ref } from 'vue';


const dynamicClass = ref('text-green-400');

// v-on example
const count = ref(0);
const increment = () => {
  count.value++;
};
</script>

<template>
  <div class="bg-black text-white min-h-screen p-8">
    
    <h1 class="text-3xl font-bold mb-4">Vue Learning Playground 🚀</h1>
    <p class="text-gray-400 mb-8 max-w-xl">
      This project is built for learning Vue concepts like reactivity, directives,
      and component-based architecture. Below are a few basic examples.
    </p>

    <div class="mb-10">
      <h2 class="text-xl font-semibold mb-2">v-bind Example</h2>
      <p class="text-gray-400 mb-3">
        Dynamically binding attributes like <code>src</code> and <code>class</code>.
      </p>

      <p :class="dynamicClass">
        This text color is dynamically bound using v-bind
      </p>
    </div>

    <div class="mb-10">
      <h2 class="text-xl font-semibold mb-2">v-on Example</h2>
      <p class="text-gray-400 mb-3">
        Handling user events like clicks.
      </p>

      <button
        @click="increment"
        class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
      >
        Click Me
      </button>

      <p class="mt-3">You clicked {{ count }} times</p>
    </div>

    <div class="mb-8">
        Little bit about the router using 'vue-router' package.
    </div>

    <div class="mt-12 text-gray-500">
      <p>Explore more:</p>
      <ul class="list-disc ml-6 mt-2">
        <li>/counter → Counter example</li>
        <li>/todo → Todo app</li>
      </ul>
    </div>

  </div>
</template>