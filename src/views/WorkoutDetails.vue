<template>
  <view-wrapper>
    <template #title>{{ workout?.name }}</template>
    <div>
      <button @click="startWorkout(workout?.exercises)">Start Workout</button>
      <div v-for="exercise in workout?.exercises" :key="exercise.id">
        <ExerciseCard :exercise="exercise" />
      </div>
    </div>
  </view-wrapper>
</template>

<script setup lang="ts">
import ViewWrapper from "@/components/wrappers/ViewWrapper.vue";
import { useWorkout } from "@/composables/useWorkout";
import ExerciseCard from "@/components/ExerciseCard.vue";
import { useWorkoutOverlayStore } from "@/stores/WorkoutOverlayStore";
import { type PropType } from "vue";

const props = defineProps({
  id: {
    type: String as PropType<string>,
    required: true,
  },
});

const workoutOverlayStore = useWorkoutOverlayStore();
const { workout } = useWorkout(props.id);

const startWorkout = workoutOverlayStore.startWorkout;
</script>
