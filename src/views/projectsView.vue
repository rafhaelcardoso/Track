<template>
  <section class="projects my-3">
    <h1>ROTA DE PROJETOS</h1>
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
          <th>Nome do projecto</th>
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
import { defineComponent } from "vue";
import iProjects from "../interfaces/iProjects";

export default defineComponent({
  name: "projectsView",
  data() {
    return {
      projectName: "",
      projects: [] as iProjects[],
    };
  },
  methods: {
    savingProject() {
      const project: iProjects = {
        name: this.projectName,
        id: new Date().toISOString(),
      };
      this.projects.push(project);
      this.projectName = "";
    },
  },
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>
