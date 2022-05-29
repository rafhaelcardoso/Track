
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
        'ADICIONA_PROJETO'(state, projectName: string) {
            const project = {
                id: new Date().toISOString(),
                name: projectName
            } as iProjects
            state.projects.push(project)
        }
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}