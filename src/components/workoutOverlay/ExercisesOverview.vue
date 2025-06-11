<template>
  <div class="exercises-overview">
    <div class="exercise-list">
      <exercise-item
        v-for="exercise in exercises"
        :key="exercise.id"
        :exercise="exercise"
        :isActive="currentExercise?.id === exercise.id"
        :isDone="exercise.done"
        :isToDo="!exercise.done"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { useWorkoutOverlayStore } from "@/stores/WorkoutOverlayStore";
import exerciseItem from "./ExerciseItem.vue";

const { exercises, currentExercise } = toRefs(useWorkoutOverlayStore());
</script>

<style scoped>
.exercise-list {
  display: flex;
  gap: 16px;
  padding: 16px;
}

.exercise-list::-webkit-scrollbar {
  height: 8px;
}

.exercise-list::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}
</style>
