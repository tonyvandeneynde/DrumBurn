<template>
  <Card
    class="exercise-item"
    :is-active="$props.isActive"
    :is-disabled="isDisabled"
  >
    <template #title> {{ exercise.name }}</template>
    <div class="bottom-section">
      <i v-if="isDone" class="material-icons checkmark">check</i>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { type PropType, computed } from "vue";
import Card from "@/components/Card.vue";
import type { Exercise } from "@/services/getExercises";

const { isActive, isToDo } = defineProps({
  exercise: {
    type: Object as PropType<Exercise>,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  isToDo: {
    type: Boolean,
    default: false,
  },
});

const isDisabled = computed(() => {
  return !isActive && isToDo;
});
</script>

<style scoped>
.exercise-item {
  height: 120px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  box-sizing: border-box;
}

.bottom-section {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>
