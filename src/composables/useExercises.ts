import { ref } from "vue";
import { getExercises, type Exercise } from "../services/getExercises";

export function useExercises() {
  const exercises = ref<Exercise[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchExercises = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      exercises.value = await getExercises();
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = "Failed to fetch exercises";
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    exercises,
    isLoading,
    error,
    fetchExercises,
  };
}
