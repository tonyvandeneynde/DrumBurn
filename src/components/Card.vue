<template>
  <div class="card" :class="{ active: isActive, disabled: isDisabled }">
    <h2 class="card-title">
      <slot name="title" />
    </h2>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style>
.card {
  padding: 0 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.active {
  border-color: #32ff6c;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
