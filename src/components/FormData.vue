<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para a criação de uma nova tarefa!"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar ?"
        />
      </div>
      <div class="columns">
        <div class="is-flex is-align-item-center is-justify-content-space-around  is-align-items-center">
          <TimerFeatures />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimerFeatures from './TimerFeatures.vue'

export default defineComponent({
  name: "FormData",
  components:{
    TimerFeatures
  ,
  },
});
</script>

<style scoped>
</style>
