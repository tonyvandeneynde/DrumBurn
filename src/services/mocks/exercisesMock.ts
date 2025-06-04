import type { Exercise } from "../getExercises";

export const exercisesMock = [
  {
    id: "some-id",
    name: "single stroke HIIT",
    type: "hiit",
    settings: {
      uptime: 20,
      downtime: 10,
      repetitions: 5,
      rudiment: "singleStroke",
    },
  },
] as Exercise[];
