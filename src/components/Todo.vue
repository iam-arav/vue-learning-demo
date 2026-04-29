<script setup>
import { useTodoStore } from '../stores/todo';

const store = useTodoStore();

</script>

<template>
<div class="flex flex-col items-center justify-center h-screen w-screen">
    <section key="Todo Addition">
    <input class="bg-white w-md h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black" v-model="store.newInputTodo"/>
    <button class="bg-green-300/75 hover:bg-green-300/50 ml-4 py-3.25 px-12 rounded-md" @click="store.onAddTodo(store.newInputTodo)">Add</button>
    </section>
    <section class="mt-8 w-xl" key="Todo List">
        <table v-if="store.numberOfTodos" class="w-full max-w-2xl border border-gray-700">
      <thead class="bg-gray-900">
        <tr>
          <th class="p-3 border border-gray-700">Done</th>
          <th class="p-3 border border-gray-700">Task</th>
          <th class="p-3 border border-gray-700">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in store.todos" :key="item.id" class="text-center">
          
            
          <td class="border border-gray-700">
            <input type="checkbox" v-model="item.completed" />
          </td>

          <td class="border border-gray-700 p-2">
            <span
              v-if="!item.isEditing"
              :class="{ 'line-through text-gray-500': item.completed }"
            >
              {{ item.todo }}
            </span>

            <input
              v-else
              v-model="item.todo"
              class="bg-gray-800 border border-gray-600 px-2 py-1 rounded w-full"
            />
          </td>

 
          <td class="border border-gray-700 space-x-2">
            
            <button
              v-if="!item.isEditing"
              @click="store.editTodo(item)"
              class="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>

            <button
              v-if="item.isEditing"
              @click="store.saveTodo(item)"
              class="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
            >
              Save
            </button>

            <button
              @click="store.deleteTodo(item.id)"
              class="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>

          </td>
        </tr>
      </tbody>
    </table>

    <p v-else class="text-gray-400 mt-4">No todos yet...</p>
    </section>

    </div>
    

    
</template>
