<template>
  <div class="box boxcolor has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'YellowBox'
})
</script>

<style  >
.boxcolor {
  background-color: var(--box-bg);
  color: var(--text-color);
  border: 3px;
  border-color: white;
}
</style>