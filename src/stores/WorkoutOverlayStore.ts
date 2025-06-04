import type { Exercise } from "@/services/getExercises";
import { defineStore } from "pinia";

export const useWorkoutOverlayStore = defineStore("workoutOverlay", {
  state: () => ({
    visible: false,
    exercises: Array<Exercise>(),
    currentExercise: null as Exercise | null,
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
      this.exercises = exercises;
      this.currentExercise = exercises[0] || null;
      this.nextExercise = exercises[1] || null;
    },
    startNextExercise() {
      if (!this.currentExercise || this.workoutFinished) return;

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
