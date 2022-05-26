<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">Descrição da Tarefa</div>
      <div class="column">
        <ClockWatch :timeInSeconds='15' />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClockWatch from "./ClockWatch.vue";

export default defineComponent({
  name: "TaskDone",
  components: {
    ClockWatch,
  }
});
</script>

<style scoped>
.box {
  background: #faf0ca;
}
</style>
