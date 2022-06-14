<template>
  <section>
    <form @submit.prevent="savingProject">
      <div for="projectName" class="label">
        Nome do Projeto
      </div>
      <input type="text" class="input" id="projectName" v-model="projectName" />
      <button class="button" type="submit">Salvar </button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { CHANGE_PROJECT, REGISTER_PROJECT } from "@/store/actions_type";

export default defineComponent({
  name: "formList",
  props: {
      id: { type: String }
  },
  mounted () {
    if (this.id) {
      const project = this.store.state.projects.find(proj => proj.id == this.id)
      this.projectName = project?.name || ''
    }
  },
  data() {
    return {
      projectName: "",
    };
  },
  methods: {
    savingProject() {
      if (this.id){
        this.store.dispatch(CHANGE_PROJECT, {
          id: this.id,
          name: this.projectName
        }).then(() => this.successAction());
      } else {
        this.store.dispatch(REGISTER_PROJECT, this.projectName)
          .then(() => this.successAction());
      }
    },

    successAction() {
      this.projectName = "";
      this.$router.push('/projetos')
    }
  },
  setup () {
    const store = useStore()
    return {
      store
    }
  }
});
</script>