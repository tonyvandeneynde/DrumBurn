import type { Exercise } from "@/services/getExercises";
import { defineStore } from "pinia";

type ExerciseState = Exercise & { done: boolean };

export const useWorkoutOverlayStore = defineStore("workoutOverlay", {
  state: () => ({
    visible: false,
    exercises: Array<ExerciseState>(),
    currentExercise: null as ExerciseState | null,
    nextExercise: null as Exercise | null,
    workoutFinished: false,
  }),
  actions: {
    startWorkout(exercises?: Exercise[]) {
      if (exercises) {
        this.setExercises(exercises);
      }
      this.visible = true;
    },
    exitWorkout() {
      this.visible = false;
    },
    setExercises(exercises: Exercise[]) {
      const exerciseStates = exercises.map((exercise) => ({
        ...exercise,
        done: false,
      }));
      this.exercises = exerciseStates;
      this.currentExercise = this.exercises[0] || null;
      this.nextExercise = this.exercises[1] || null;
    },
    startNextExercise() {
      if (!this.currentExercise || this.workoutFinished) return;

      this.currentExercise.done = true;

      const currentIndex = this.exercises.indexOf(this.currentExercise);
      if (currentIndex === -1 || currentIndex === this.exercises.length - 1) {
        this.currentExercise = null;
        this.nextExercise = null;
        this.workoutFinished = true;
        return;
      }

      this.currentExercise = this.exercises[currentIndex + 1];
      this.nextExercise = this.exercises[currentIndex + 2] || null;
    },
    resetWorkout() {
      this.visible = false;
      this.exercises = [];
      this.currentExercise = null;
      this.nextExercise = null;
      this.workoutFinished = false;
    },
  },
});
