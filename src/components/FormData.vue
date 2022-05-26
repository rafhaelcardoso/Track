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
          <section class="mx-2">
            <strong> 00:00:00 </strong>
          </section>
          <button class="button mx-2">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button mx-2">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormData",
});
</script>

<style scoped></style>
