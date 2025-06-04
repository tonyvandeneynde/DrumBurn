<template>
  <view-wrapper>
    <template #title>Workouts</template>
    <div>
      <div v-if="isLoading">Loading workouts...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else-if="workouts.length">
        <div v-for="workout in workouts" :key="workout.id">
          <WorkoutCard
            :workout="workout"
            @card-click="goToWorkoutDetails(workout.id)"
          />
        </div>
      </div>
      <p v-else>No workouts available.</p>
    </div>
  </view-wrapper>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useWorkouts } from "@/composables/useWorkouts";
import WorkoutCard from "@/components/WorkoutCard.vue";
import ViewWrapper from "@/components/wrappers/ViewWrapper.vue";

const { workouts, error, isLoading } = useWorkouts();

const router = useRouter();

const goToWorkoutDetails = (id: string) => {
  router.push({ name: "WorkoutDetails", params: { id } });
};
</script>
