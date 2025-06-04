<template>
  <div class="exercise-timer">
    <div v-if="workoutFinished" class="workout-finished">
      <h2>Workout Finished!</h2>
      <p>Great job! You've completed all exercises.</p>
    </div>
    <div v-if="currentExercise?.type === 'hiit'">
      <hiit-timer
        :exercise="currentExercise"
        @exercise-complete="onExerciseComplete"
      />
    </div>
    <div v-if="currentExercise?.type === 'timerun'">
      <timerun-timer
        :exercise="currentExercise"
        @exercise-complete="onExerciseComplete"
      />
    </div>
    <div class="next-exercise" v-if="nextExercise">
      Next up: {{ nextExercise.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWorkoutOverlayStore } from "@/stores/WorkoutOverlayStore";
import HiitTimer from "./HIITTimer.vue";
import TimerunTimer from "./TimerunTimer.vue";
import { computed, onBeforeUnmount } from "vue";

const workoutOverlayStore = useWorkoutOverlayStore();

const currentExercise = computed(() => workoutOverlayStore.currentExercise);
const nextExercise = computed(() => workoutOverlayStore.nextExercise);
const workoutFinished = computed(() => workoutOverlayStore.workoutFinished);

const onExerciseComplete = () => {
  workoutOverlayStore.startNextExercise();
};

onBeforeUnmount(() => {
  if (workoutFinished.value) {
    workoutOverlayStore.resetWorkout();
  }
});
</script>

<style scoped>
.next-exercise {
  font-size: 1.5em;
  color: white;
}

.workout-finished {
  text-align: center;
  color: white;
}
</style>
