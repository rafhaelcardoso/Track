<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-gapless is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormData />
      <div class="lista">
        <TaskDone />
        <TaskDone />
        <TaskDone />
        <TaskDone />
        <TaskDone />
        <TaskDone />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormData from "./components/FormData.vue";
import TaskDone from "./components/TaskDone.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormData,
    TaskDone,
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>
