import type { Exercise } from "./getExercises";
import { workoutsMock } from "./mocks/workoutsMock";

export interface Workout {
  id: string;
  name: string;
  durationInSeconds: number; // in seconds
  exercises: Array<Exercise>;
}

export const getWorkouts = () => Promise.resolve(workoutsMock);
