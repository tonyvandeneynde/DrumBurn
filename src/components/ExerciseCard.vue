<template>
  <Card>
    <template #title> {{ exercise.name }}</template>
  </Card>
</template>

<script setup lang="ts">
import { type PropType } from "vue";
import Card from "./Card.vue";
import type { Exercise } from "@/services/getExercises";

defineProps({
  exercise: {
    type: Object as PropType<Exercise>,
    required: true,
  },
});
</script>
