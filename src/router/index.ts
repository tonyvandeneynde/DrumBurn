import { createRouter, createWebHistory } from "vue-router";
import Workouts from "@/views/Workouts.vue";
import Exercises from "@/views/Exercises.vue";
import WorkoutDetails from "@/views/WorkoutDetails.vue";

const routes = [
  { path: "/workouts", name: "Workouts", component: Workouts },
  { path: "/exercises", name: "Exercises", component: Exercises },
  { path: "/", redirect: "/workouts" },
  {
    path: "/workout/:id",
    name: "WorkoutDetails",
    component: WorkoutDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
