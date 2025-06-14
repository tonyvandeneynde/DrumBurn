<template>
  <timer
    :is-flashing="isFlashing"
    :is-work="currentPhase === 'uptime'"
    :time-label="timeLabel"
  >
    <TimerContent
      :name="name"
      :rudiment="rudiment"
      :bpm="bpm"
      :phase="currentPhase"
    />
  </timer>
</template>

<script setup lang="ts">
import { ref, onUnmounted, toRefs } from "vue";
import { useExerciseTimer } from "@/composables/useExerciseTimer";
import { type HIITExercise } from "@/services/getExercises";
import TimerContent from "./TimerContent.vue";
import Timer from "./Timer.vue";

const preRunTime = 5; // seconds before the exercise starts

const props = defineProps<{
  exercise: HIITExercise;
  onExerciseComplete: () => void;
}>();

const { bpm, downtime, repetitions, rudiment, uptime } = toRefs(
  props.exercise.settings
);

const { currentPhase, timeLabel, stopTimer } = useExerciseTimer(
  preRunTime,
  uptime.value,
  downtime.value,
  repetitions.value,
  props.onExerciseComplete
);

const name = ref(props.exercise.name);
const isFlashing = ref(false);

onUnmounted(() => {
  stopTimer();
});
</script>
