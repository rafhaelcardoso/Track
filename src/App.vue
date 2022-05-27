<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-gapless is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormData @SavingTask="saveTask" />
      <div class="lista">
        <TaskDone v-for="(task, index) in tasks" :key="index" :task="task" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormData from "./components/FormData.vue";
import TaskDone from "./components/TaskDone.vue";
import iTasks from "./interfaces/iTasks"

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormData,
    TaskDone,
  },
  data () {
    return {
      tasks: [] as iTasks[]
    }
  },
  methods: {
    saveTask (task: iTasks){
      this.tasks.push(task)
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>
