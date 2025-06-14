<template>
  <timer :time-label="timeLabel" :is-work="currentPhase === 'uptime'">
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
import { type TimerunExercise } from "@/services/getExercises";
import TimerContent from "./TimerContent.vue";
import Timer from "./Timer.vue";

const preRunTime = 5; // seconds before the exercise starts

const props = defineProps<{
  exercise: TimerunExercise;
  onExerciseComplete: () => void;
}>();

const { bpm, time, rest, rudiment } = toRefs(props.exercise.settings);

const { currentPhase, timeLabel, stopTimer } = useExerciseTimer(
  preRunTime,
  time.value,
  rest.value,
  1, // Timerun only has one repetition
  props.onExerciseComplete
);

const name = ref(props.exercise.name);

onUnmounted(() => {
  stopTimer();
});
</script>
