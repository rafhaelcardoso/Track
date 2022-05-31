import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TasksView from '../views/tasksView.vue'
import projectsView from '../views/projectsView.vue'
import formList from '../views/projects/formList.vue'
import projectsList from '../views/projects/projectsList.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tasks',
        component: TasksView
    },
    {
        path: '/projetos',
        component: projectsView,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: projectsList
            },
            {
                path: 'novo',
                name: 'Novo Projeto',
                component: formList
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: formList,
                props: true
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;