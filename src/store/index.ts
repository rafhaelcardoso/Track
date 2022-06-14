
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue'
import iProjects from "@/interfaces/iProjects";
import { ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT, GET_ALL_PROJECTS } from "./mutations_type";
import { CHANGE_PROJECT, GET_PROJECTS, REGISTER_PROJECT, REMOVE_PROJECT } from "./actions_type";
import http from '@/http'

interface State {
    projects: iProjects[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projects: []
    },
    mutations: {
        [ADD_PROJECT](state, projectName: string) {
            const project = {
                id: new Date().toISOString(),
                name: projectName
            } as iProjects
            state.projects.push(project)
        },
        [EDIT_PROJECT](state, project: iProjects) {
            const index = state.projects.findIndex(proj => proj.id == project.id)
            state.projects[index] = project
        },
        [DELETE_PROJECT](state, id: string) {
            state.projects = state.projects.filter(proj => proj.id != id)
        },
        [GET_ALL_PROJECTS](state, projects: iProjects[]) {
            state.projects = projects
        }
    },
    actions: {
        [GET_PROJECTS] ({ commit }) {
            http.get('projects')
                .then(response => commit(GET_ALL_PROJECTS, response.data))
         },
         [REGISTER_PROJECT] ( context, projectName: string) {
             http.post('/projects', {
                 name: projectName
             })
         },
         [CHANGE_PROJECT] ( context, project: iProjects) {
            http.put(`/projects/${project.id}`, project)
        },
        [REMOVE_PROJECT] ({commit}, id: string) {
            http.delete(`/projects/${id}`)
            .then(() => commit (DELETE_PROJECT, id))

        }
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}