import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TasksView from '../views/tasksView.vue'

const routes: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tasks',
    component: TasksView
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;