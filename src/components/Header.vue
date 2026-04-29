<script setup>
import vueLogo from '../assets/vue.svg'

const navItems = [{
  id:1, title:"Home", link:"/"
},{id:2, title:"Todo", link:"/todo"}, 
{id:3, title:"Counter", link:"/counter"}, 
{id:4, title:"About", link:"/about"}]

</script>

<template>

<div class="h-12 bg-gray-500 text-white" > 
  <div class="flex items-center justify-between mr-4 md:mr-8"> 
    <div class="flex items-center space-x-2 ml-4 mt-1"> 
      <div>My App </div>
      <img class="h-6 w-8 mt-2" :src="vueLogo"/>
    </div>
    <nav class="relative after:pointer-events-none after:absolute"> 
      <ul class="flex items-center justify-evenly space-x-4"> 
        <li v-for="item in navItems" :key="item.id"> 
          <a :href="item.link">{{item.title}}</a>
        </li>

      </ul>

    </nav>
  </div>
  
</div>
  
</template>



<style>

</style>