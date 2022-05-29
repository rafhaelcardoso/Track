<template>
  <section class="projects my-3">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="savingProject">
      <div for="projectName" class="label">
        Nome do Projeto
      </div>
      <input type="text" class="input" id="projectName" v-model="projectName" />
      <button class="button" type="submit">Salvar </button>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do projeto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "projectsView",
  data() {
    return {
      projectName: "",
    };
  },
  methods: {
    savingProject() {
      this.store.commit('ADICIONA_PROJETO', this.projectName),
      this.projectName = "";
    },
  },
  setup () {
    const store = useStore()
    return {
      store,
      projects: computed(() => store.state.projects)
    }
  }
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>
