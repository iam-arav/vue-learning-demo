import { createRouter, createWebHistory } from "vue-router";
import Home from '../src/components/Home.vue';
import Counter from '../src/components/Counter.vue';
import Todo from '../src/components/Todo.vue';
import About from '../src/components/About.vue'

const routes = [
    {path: '/', component: Home },
    {path: '/counter', component: Counter},
    {path: '/todo', component: Todo},
    {path: '/about', component: About}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;