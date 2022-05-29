import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TasksView from '../views/tasksView.vue'
import projectsView from '../views/projectsView.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tasks',
        component: TasksView
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: projectsView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;