import { computed } from "vue";
import { useWorkouts } from "./useWorkouts";

export const useWorkout = (id: string) => {
  const { workouts } = useWorkouts();

  const workout = computed(() =>
    workouts.value.find((workout) => workout.id === id)
  );

  return {
    workout,
  };
};
