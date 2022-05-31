import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TasksView from '../views/tasksView.vue'
import projectsView from '../views/projectsView.vue'
import formList from '../views/projects/formList.vue'

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
    {
        path: '/projetos/novo',
        name: 'Novo Projeto',
        component: formList
    },
    {
        path: '/projetos/:id',
        name: 'Editar Projeto',
        component: formList,
        props: true
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;