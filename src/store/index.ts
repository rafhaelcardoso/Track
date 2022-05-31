
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue'
import iProjects from "@/interfaces/iProjects";

interface State {
    projects: iProjects[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projects: []
    },
    mutations: {
        'ADD_PROJECT'(state, projectName: string) {
            const project = {
                id: new Date().toISOString(),
                name: projectName
            } as iProjects
            state.projects.push(project)
        },
        'CHANGE_PROJECT'(state, project: iProjects) {
            const index = state.projects.findIndex(proj => proj.id == project.id)
            state.projects[index] = project
        }
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}