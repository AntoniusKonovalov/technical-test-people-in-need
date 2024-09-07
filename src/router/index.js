import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Task2View from "@/views/Task2View.vue";
import Task3View from "@/views/Task3View.vue";
import Task4View from "@/views/Task4View.vue";
import Task5View from "@/views/Task5View.vue";
import Task6View from "@/views/Task6View.vue";
import Task7View from "@/views/Task7View.vue";
import Task8View from "@/views/Task8View.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/task2',
            name: 'task2',
            component: Task2View
        },
        {
            path: '/task3',
            name: 'task3',
            component: Task3View
        },
        {
            path: '/task4',
            name: 'task4',
            component: Task4View
        },
        {
            path: '/task5',
            name: 'task5',
            component: Task5View
        },
        {
            path: '/task6',
            name: 'task6',
            component: Task6View
        },
        {
            path: '/task7',
            name: 'task7',
            component: Task7View
        },
        {
            path: '/task8',
            name: 'task8',
            component: Task8View
        },
        
    ]
})

export default router;