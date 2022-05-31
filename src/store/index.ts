
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue'
import iProjects from "@/interfaces/iProjects";
import { ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT } from "./mutations_type";

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
        }
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}