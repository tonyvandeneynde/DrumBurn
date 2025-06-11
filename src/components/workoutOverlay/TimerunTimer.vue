<template>
  <timer :time-label="timeLabel" :is-work="phase === 'uptime'">
    <div class="name">{{ name }}</div>
    <template v-if="phase === 'uptime'">
      <div class="rudiment">RUDIMENT: {{ rudiment }}</div>
      <div>TEMPO: {{ bpm }} BPM</div>
    </template>
    <template v-else-if="phase === 'preRun'">
      <div class="rudiment">RUDIMENT: {{ rudiment }}</div>
      <div>TEMPO: {{ bpm }} BPM</div>
      <div class="pop">Get Ready!</div>
    </template>
    <template v-else>
      <div class="rudiment">REST</div>
    </template>
  </timer>
</template>

<script setup lang="ts">
import { ref, onUnmounted, toRefs } from "vue";
import { type TimerunExercise } from "@/services/getExercises";
import { useTimer } from "@/composables/useTimer";
import Timer from "./Timer.vue";

const preRunTime = 5; // seconds before the exercise starts

const props = defineProps<{
  exercise: TimerunExercise;
  onExerciseComplete: () => void;
}>();

const name = ref(props.exercise.name);
const { bpm, rudiment, time, rest } = toRefs(props.exercise.settings);

const phase = ref<"uptime" | "downtime" | "preRun">("preRun");

const onTimerEnded = () => {
  if (phase.value === "downtime") {
    props.onExerciseComplete();
    return;
  } else if (phase.value === "preRun") {
    phase.value = "uptime";
    startTimer(time.value);
  } else {
    phase.value = "downtime";
    startTimer(rest.value);
  }
};

const { startTimer, stopTimer, timeLabel } = useTimer(onTimerEnded);

// Start the timer for the initial exercise
startTimer(preRunTime);

onUnmounted(() => {
  stopTimer();
});
</script>

<style scoped>
.rudiment {
  font-style: italic;
  color: #ffa500;
  margin-bottom: 1em;
}

.hiit-timer div {
  margin: 0.5em 0;
  text-align: center;
}

.name {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.pop {
  font-size: 1.2em;
  color: #ff4500;
  font-weight: bold;
  margin-top: 1em;
}
</style>
