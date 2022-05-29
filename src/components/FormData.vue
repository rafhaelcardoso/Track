<template>
  <div class="box formstyle mx-3 my-2">
    <div class="columns">
      <div
        class="column is-5"
        role="form"
        aria-label="Formulário para a criação de uma nova tarefa!"
      >
        <input
          type="text"
          class="input inputbg"
          placeholder="Qual tarefa você deseja iniciar ?"
          v-model="TaskDescription"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="projectID">
            <option value="">Selecione o projeto</option>
            <option
              :value="project.id"
              v-for="project in projects"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="columns">
        <div
          class="is-flex is-align-item-center is-justify-content-space-around is-align-items-center"
        >
          <TimerFeatures @timer-is-stoped="FinishTask" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { key } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import TimerFeatures from './TimerFeatures.vue'

export default defineComponent({
  name: "FormData",
  components:{
    TimerFeatures,
  },
  data() {
    return {
      TaskDescription: '',
      projectID: ''
    };
  },
  emits: ['SavingTask'],
  methods: {
    FinishTask (timeSpent: number) : void {
      console.log('tempo da tarefa', timeSpent),
      console.log('descrição da tarefa', this.TaskDescription),
      this.$emit('SavingTask', {
        durationInSeconds: timeSpent,
        description: this.TaskDescription,
        project: this.projects.find(project => project.id == this.projectID)
      })
      this.TaskDescription = ''
    },
  },
  setup () {
    const store = useStore(key)
    return {
      projects: computed(() => store.state.projects)
    }
  }
});
</script>

<style>
.formstyle {
  color: var(--text-color);
  background-color: var(--clock-bg);
}

.inputbg {
  background-color: var(--input-bg);
  color: var(--text-color);
}
</style>
