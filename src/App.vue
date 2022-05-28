<template>
  <main class="columns is-gapless is-multiline" :class="{ 'darkmode' : darkModeOn}">
    <div class="column is-gapless is-one-quarter">
      <BarraLateral @was-theme-swithed="switchTheme" />
    </div>
    <div class="column is-three-quarter content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
  },
  data () {
    return {
      darkModeOn: false,
    }
  },
  methods: {
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
