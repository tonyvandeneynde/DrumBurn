import { exercisesMock } from "./mocks/exercisesMock";

export type Exercise = HIITExercise | TimerunExercise;

export type Rudiment = "singleStroke" | "doubleStroke" | "paradiddle";

export interface ExerciseBase {
  id: string;
  name: string;
}

export interface HIITExercise extends ExerciseBase {
  type: "hiit";
  settings: {
    uptime: number; // in seconds
    downtime: number; // in seconds
    bpm: number;
    repetitions: number;
    rudiment: Rudiment;
  };
}

export interface TimerunExercise extends ExerciseBase {
  type: "timerun";
  settings: {
    time: number; // in seconds
    bpm: number;
    rudiment: Rudiment;
    rest: number; // in seconds
  };
}

export const getExercises = () => Promise.resolve(exercisesMock);
