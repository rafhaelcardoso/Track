<template>
  <main class="columns is-gapless is-multiline" :class="{ 'darkmode' : darkModeOn}">
    <div class="column is-gapless is-one-quarter">
      <BarraLateral @was-theme-swithed="switchTheme" />
    </div>
    <div class="column is-three-quarter content">
      <FormData @SavingTask="saveTask" />
      <div class="lista">
        <TaskDone v-for="(task, index) in tasks" :key="index" :task="task" />
        <YellowBox v-if="listIsEmpty">
          Você não está muito produtivo hoje :(
        </YellowBox>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormData from "./components/FormData.vue";
import TaskDone from "./components/TaskDone.vue";
import YellowBox from "./components/YellowBox.vue";
import iTasks from "./interfaces/iTasks"

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormData,
    TaskDone,
    YellowBox
  },
  data () {
    return {
      tasks: [] as iTasks[],
      darkModeOn: false,
    }
  },
  computed: {
    listIsEmpty () : boolean {
      return this.tasks.length === 0
    },
  },
  methods: {
    saveTask (task: iTasks){
      this.tasks.push(task)
    },
    switchTheme(darkModeOn : boolean){
      this.darkModeOn = darkModeOn
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-color: rgb(0, 0, 0);
  --clock-bg:  #4cd499;
  --input-bg: #ffffff6c;
  --box-bg: #5dfdcace ;
}

main.darkmode {
  --bg-primary: #121212;
  --text-color: #fff;
  --clock-bg: #49454e ;
  --input-bg: #d4d2d8 ;
  --box-bg: #5dfdcace ;
}

.content{
  background-color: var(--bg-primary);
}
</style>
