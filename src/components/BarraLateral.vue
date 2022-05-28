<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo">
    </h1>
    <button class="button" @click="switchTheme">
      {{ themeSelector }}
    </button>
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
