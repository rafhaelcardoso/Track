<template>
  <YellowBox>
    <div class="columns">
      <div class="column is-5">{{ task.description || 'Tarefa sem descrição' }}</div>
      <div class="column is-4">{{ task.project?.name || 'Sem projeto vinculado'}}</div>
      <div class="column">
        <ClockWatch :timeInSeconds='task.durationInSeconds' />
      </div>
    </div>
  </YellowBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ClockWatch from "./ClockWatch.vue";
import iTask from "../interfaces/iTasks"
import YellowBox from './YellowBox.vue'

export default defineComponent({
  name: "TaskDone",
  components: {
    ClockWatch,
    YellowBox
  },
  props: {
    task: {
      type: Object as PropType<iTask>,
      required: true
    }
  }
});
</script>

<style scoped>
.boxcolor {
  background-color: var(--box-bg);
  color: var(--text-color);
  border: 3px;
  border-color: white;
}
</style>
