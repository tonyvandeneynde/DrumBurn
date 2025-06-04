<template>
  <div id="app">
    <Header />
    <router-view />
    <workout-overlay />
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import WorkoutOverlay from "@/views/WorkoutOverlay.vue";

export default {
  name: "App",
  components: {
    Header,
    WorkoutOverlay,
  },
};
</script>
