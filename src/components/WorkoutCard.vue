<template>
  <ClickableWrapper :onClick="handleClick">
    <Card>
      <template #title>{{ workout?.name || "Unknown Workout" }}</template>
      <p>Duration: {{ workout?.durationInSeconds || 0 }} minutes</p>
    </Card>
  </ClickableWrapper>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Card from "./Card.vue";
import type { Workout } from "@/services/getWorkouts";
import ClickableWrapper from "./wrappers/ClickableWrapper.vue";

const props = defineProps<{
  workout: Workout | null;
}>();

const emit = defineEmits<{
  (event: "card-click", payload: Workout): void;
}>();

const handleClick = () => {
  if (props.workout) {
    emit("card-click", props.workout);
  } else {
    console.warn("Workout is null or undefined");
  }
};
</script>
