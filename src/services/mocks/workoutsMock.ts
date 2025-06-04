import type { Workout } from "../getWorkouts";

export const workoutsMock: Workout[] = [
  {
    id: "workout1",
    name: "Arms workout",
    durationInSeconds: 3600,
    exercises: [
      {
        id: "warmup",
        name: "warmup",
        type: "timerun",
        settings: { time: 12, bpm: 98, rudiment: "singleStroke", rest: 5 },
      },
      {
        id: "exercise1",
        name: "single stroke HIIT",
        type: "hiit",
        settings: {
          uptime: 5,
          downtime: 3,
          bpm: 120,
          repetitions: 3,
          rudiment: "doubleStroke",
        },
      },
      {
        id: "exercise2",
        name: "single stroke endurance",
        type: "timerun",
        settings: {
          time: 10,
          bpm: 110,
          rudiment: "singleStroke",
          rest: 5,
        },
      },
      {
        id: "exercise3",
        name: "single stroke HIIT",
        type: "hiit",
        settings: {
          uptime: 7,
          downtime: 4,
          bpm: 140,
          repetitions: 3,
          rudiment: "singleStroke",
        },
      },
    ],
  },
];
