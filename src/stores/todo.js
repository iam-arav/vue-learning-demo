import { defineStore } from "pinia";
import { ref, computed } from 'vue';

export const useTodoStore = defineStore('todo', () => {
    const todos = ref([]);
    const numberOfTodos = computed(() => todos.value.length);

    const newInputTodo = ref('')

    const onAddTodo = (todo) => {
        console.log('todo',todo)
        if (todo.trim() === '') return;
        newInputTodo.value = '';
        const newTodo = { id: numberOfTodos.value + 1, todo, completed: false, isEditing: false };
        todos.value.push(newTodo);
    }

    const deleteTodo = (id) => {
        todos.value = todos.value.filter((item) => item.id !== id)
    }

    const toggleComplete = (todo) => {
        todo.completed = !todo.completed
    }
    const editTodo = (todo) => {
        todo.isEditing = true;
    };

    const saveTodo = (todo) => {
        todo.isEditing = false
    }

    return { todos, newInputTodo, numberOfTodos, onAddTodo, deleteTodo, toggleComplete, editTodo, saveTodo }
})