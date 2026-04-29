<script setup>
import { ref, computed } from 'vue';
const count = ref(0);

const doubleCount = computed(() => count.value * 2);

const incrementCount = () => {
    count.value += 1
}

const decrementCount = () => {
    count.value = Math.max(count.value - 1, 0)
}

const resetCounter = () => {
    count.value = 0
}
</script>
<template>
<div class="flex flex-col items-center justify-center h-screen">
    <h4 class="text-8xl"> 
        {{count}}
    </h4> 
    <div class="mt-8 flex items-center justify-between min-w-64 ">
        <button @click="decrementCount" class="bg-blue-500 rounded-full text-2xl px-6 py-4 hover:bg-blue-500/50 active:scale-95 active:bg-blue-600 focus:ring-4 focus:ring-neutral-tertiary focus:outline-none transition transform duration-100"> - </button> 
        <button @click="resetCounter" class="bg-red-500 rounded-full text-2xl px-6 py-4 hover:bg-red-500/50 active:scale-95 active:bg-blue-600 focus:ring-4 focus:ring-neutral-tertiary focus:outline-none transition transform duration-100"> Reset </button> 
        <button @click="incrementCount" class="bg-blue-500 rounded-full text-2xl px-6 py-4 hover:bg-blue-500/50 active:scale-95 active:bg-blue-600 focus:ring-4 focus:ring-neutral-tertiary focus:outline-none transition transform duration-100">  + </button> 
    </div>
    <div class="mt-8 opacity-25">computed double count : {{doubleCount}}</div>

</div>
  
</template>



<style>

</style>