<template>
  <FormData @SavingTask="saveTask" />
  <div class="lista">
    <TaskDone v-for="(task, index) in tasks" :key="index" :task="task" />
    <YellowBox v-if="listIsEmpty">
      Você não está muito produtivo hoje :(
    </YellowBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormData from "../components/FormData.vue";
import TaskDone from "../components/TaskDone.vue";
import YellowBox from "../components/YellowBox.vue";
import iTasks from "../interfaces/iTasks";

export default defineComponent({
  name: "TasksView",
  components: {
    FormData,
    TaskDone,
    YellowBox,
  },
  data() {
    return {
      tasks: [] as iTasks[],
    };
  },
  computed: {
    listIsEmpty(): boolean {
      return this.tasks.length === 0;
    },
  },
  methods: {
    saveTask(task: iTasks) {
      this.tasks.push(task);
    },
  },
});
</script>

<style>
</style>
