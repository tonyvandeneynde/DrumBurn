<template>
  <overlay-wrapper
    :visible="visible"
    :onClose="hideOverlay"
    close-button-text="Close Workout"
  >
    <div class="content">
      <exercises-overview />
      <exercise-timer />
    </div>
  </overlay-wrapper>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWorkoutOverlayStore } from "@/stores/WorkoutOverlayStore";
import OverlayWrapper from "@/components/wrappers/OverlayWrapper.vue";
import ExerciseTimer from "@/components/workoutOverlay/ExerciseTimer.vue";
import ExercisesOverview from "@/components/workoutOverlay/ExercisesOverview.vue";

const overlayStore = useWorkoutOverlayStore();

const visible = computed(() => overlayStore.visible);

const hideOverlay = () => {
  overlayStore.exitWorkout();
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 1000;
}
.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  color: white;
}
</style>
