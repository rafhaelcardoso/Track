<template>
  <div
    class="is-flex is-align-item-center is-justify-content-space-around is-align-items-center"
  >
    <ClockWatch :timeInSeconds="timeInSeconds" />
    <button class="button mx-2" @click="play" :disabled="isTimerCounting">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button mx-2" @click="stop" :disabled="!isTimerCounting">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClockWatch from "./ClockWatch.vue";

export default defineComponent({
  name: "TimerFeatures",
  components: {
    ClockWatch,
  },
  data() {
    return {
      timeInSeconds: 0,
      Timer: 0,
      isTimerCounting: false
    };
  },
  methods: {
    play() {
      this.isTimerCounting = true,
      this.Timer = setInterval(() => {
        this.timeInSeconds += 1;
      }, 1000);
    },

    stop() {
      this.isTimerCounting = false,
      clearInterval(this.Timer);
    },
  },
});
</script>

<style scoped></style>
