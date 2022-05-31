<template>
  <div class="projects my-3">
    <h1 class="title">Projetos</h1>
    <router-view></router-view> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "projectsView",
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>
