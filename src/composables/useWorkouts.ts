import { useQuery } from "@tanstack/vue-query";
import { getWorkouts, type Workout } from "../services/getWorkouts";
import { keys } from "vuetify/lib/util/helpers.mjs";

export function useWorkouts() {
  const {
    data: workouts,
    isLoading,
    error,
  } = useQuery<Workout[], Error>({
    initialData: [],
    queryKey: keys(["workouts"]),
    queryFn: getWorkouts,
  });

  return {
    workouts,
    isLoading,
    error,
  };
}
