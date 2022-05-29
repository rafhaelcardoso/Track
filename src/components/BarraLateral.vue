<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo">
    </h1>
    <div class="has-text-centered">
    <button class="button" @click="switchTheme">
      {{ themeSelector }}
    </button>
    </div>
     <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            projetos
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  emits: ['wasThemeSwithed'],
  data () {
    return {
      darkModeOn: false,
    }
  },
  computed: {
    themeSelector () {
      if (this.darkModeOn) {
      return 'Desativar modo escuro'
      } else
      return 'Ativar modo escuro'
    }
  },
  methods: {
    switchTheme () {
      this.darkModeOn = !this.darkModeOn
      this.$emit('wasThemeSwithed', this.darkModeOn)
    }
  }
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
