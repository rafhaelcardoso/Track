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
            <strong> {{ elapsedTime }} </strong>
          </section>
          <button class="button mx-2" @click="play">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button mx-2" @click="stop">
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
  data (){
    return{
      timeInSeconds: 0
    }
  },
  computed: {
    elapsedTime() : string {
      return new Date(this.timeInSeconds * 1000).toISOString().substr(11,8)
    }
  },
  methods : {
    play(){
      setInterval(()=>{
      this.timeInSeconds +=1
      }, 1000)
    },

    stop(){
      clearInterval(this.timeInSeconds)
    },
  }
});
</script>

<style scoped></style>
