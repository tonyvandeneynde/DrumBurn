<template>
  <div class="clickable-wrapper" @click="handleClick">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Define props
const props = defineProps<{
  onClick: (event: Event) => void;
}>();

// Define emitted events
const emit = defineEmits<{
  (event: "click", payload: Event): void;
}>();

// Handle click event
const handleClick = (event: Event) => {
  if (props.onClick) {
    props.onClick(event);
    emit("click", event);
  }
};
</script>

<style>
.clickable-wrapper {
  cursor: pointer;
  display: inline-block;
}
</style>
