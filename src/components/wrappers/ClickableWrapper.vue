<template>
  <div class="clickable-wrapper" @click="handleClick">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  onClick: (event: Event) => void;
}>();

const emit = defineEmits<{
  (event: "click", payload: Event): void;
}>();

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
