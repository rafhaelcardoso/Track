<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{task.description}}</div>
      <div class="column">
        <ClockWatch :timeInSeconds='task.durationInSeconds' />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ClockWatch from "./ClockWatch.vue";
import iTask from "../interfaces/iTasks"

export default defineComponent({
  name: "TaskDone",
  components: {
    ClockWatch,
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
.box {
  background: #faf0ca;
}
</style>
