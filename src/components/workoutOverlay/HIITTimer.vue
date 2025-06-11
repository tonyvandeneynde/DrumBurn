<template>
  <timer
    :is-flashing="isFlashing"
    :is-work="currentPhase === 'uptime'"
    :time-label="timeLabel"
  >
    <div class="name">{{ name }}</div>
    <div class="rudiment">RUDIMENT: {{ rudiment }}</div>
    <div>TEMPO: {{ bpm }} BPM</div>
    <div class="phase" :class="currentPhase">
      {{ phaseText }}
    </div>
  </timer>
</template>

<script setup lang="ts">
import { ref, onUnmounted, watch, toRefs, computed } from "vue";
import { type HIITExercise } from "@/services/getExercises";
import { useTimer } from "@/composables/useTimer";
import Timer from "./Timer.vue";

const preRunTime = 5; // seconds before the exercise starts

const props = defineProps<{
  exercise: HIITExercise;
  onExerciseComplete: () => void;
}>();

const name = ref(props.exercise.name);
const { bpm, downtime, repetitions, rudiment, uptime } = toRefs(
  props.exercise.settings
);

const currentRep = ref(1);
const currentPhase = ref<"downtime" | "uptime" | "preRun">("preRun");
const isFlashing = ref(false);

let flashTimeout: ReturnType<typeof setTimeout> | null = null;

const phaseText = computed(() => {
  if (currentPhase.value === "uptime") return "WORK";
  if (currentPhase.value === "preRun") return "Get ready!";
  return "REST";
});

// Watch for changes in timeLeft and start a new timer when the current phase ends
const onTimerEnded = () => {
  if (currentPhase.value === "uptime") {
    currentPhase.value = "downtime";
    startTimer(downtime.value);

    // Trigger a flash effect
    isFlashing.value = true;
    flashTimeout = setTimeout(() => {
      isFlashing.value = false;
    }, 200);
  } else if (currentPhase.value === "preRun") {
    currentPhase.value = "uptime";
    startTimer(uptime.value);
  } else if (currentPhase.value === "downtime") {
    if (currentRep.value >= repetitions.value) {
      // If all repetitions are done, call the onExerciseComplete callback
      props.onExerciseComplete();
      return;
    }
    currentPhase.value = "uptime";
    currentRep.value += 1;

    startTimer(uptime.value);
  }
};

const { startTimer, stopTimer, timeLabel } = useTimer(onTimerEnded);

// Start the timer for the initial exercise
startTimer(preRunTime);

watch(
  () => props.exercise,
  () => {
    currentRep.value = 1;
    currentPhase.value = "uptime";
    startTimer(uptime.value);
  }
);

onUnmounted(() => {
  stopTimer();
  if (flashTimeout) {
    clearTimeout(flashTimeout);
  }
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

.preRun {
  font-size: 1.2em;
  color: #ff4500;
  font-weight: bold;
  margin-top: 1em;
}
</style>
